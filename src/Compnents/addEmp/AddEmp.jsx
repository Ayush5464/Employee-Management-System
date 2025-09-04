import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../navbar/Navbar";
import CURD_OP from "../Services/Employee.services";
import "./addEmp.css";

function AddEmp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    dept: "",
    empType: "",
    salary: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((val) => !val.trim());

    if (isEmpty) {
      toast.error("All fields are mandatory.");
      return;
    }

    try {
      await CURD_OP.addEmployee(formData);
      toast.success("New employee added successfully...");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="addEmp">
        <div className="form-container">
          <h3>Add an Employee</h3>
          <form onSubmit={handleSubmit}>
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone", name: "phone", type: "number" },
              { label: "Age", name: "age", type: "number" },
              { label: "Department", name: "dept", type: "text" },
              { label: "Employee Type", name: "empType", type: "text" },
              { label: "Salary", name: "salary", type: "number" },
            ].map((field) => (
              <div className="mb-3" key={field.name}>
                <label htmlFor={field.name} className="form-label">
                  {field.label}:
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  className="form-control"
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* Address as textarea */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                className="form-control"
                placeholder="Enter employee address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <p>
              Go back to <Link to="/">Home</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddEmp;
