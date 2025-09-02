import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import CURD_OP from "../Services/Employee.services";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import "./updateEmp.css";

const { updateEmployee } = CURD_OP;

export default function UpdateEmp() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [dept, setDept] = useState("");
  const [empType, setEmpType] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  useEffect(() => {
    if (state) {
      setName(state.name || "");
      setEmail(state.email || "");
      setPhone(state.phone || "");
      setAge(state.age || "");
      setAddress(state.address || "");
      setDept(state.dept || "");
      setEmpType(state.empType || "");
      setSalary(state.salary || "");
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !phone ||
      !age ||
      !address ||
      !dept ||
      !empType ||
      !salary
    ) {
      setMessage({ error: true, msg: "All fields are mandatory..." });
      return;
    }

    const updateEmp = {
      name,
      email,
      phone,
      age,
      address,
      dept,
      salary,
      empType,
    };

    setMessage({ error: false, msg: "" });

    try {
      await updateEmployee(state.id, updateEmp);
      setMessage({
        error: false,
        msg: "Employee updated successfully...redirecting to home in 3 sec...",
      });

      // Clear form only on success
      setName("");
      setEmail("");
      setPhone("");
      setAge("");
      setAddress("");
      setDept("");
      setEmpType("");
      setSalary("");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log(err);
      setMessage({ error: true, msg: err.message });
    }
  };

  return (
    <div className="updateEmp">
      <Navbar />

      {/* Alert */}
      {message?.msg && (
        <div
          className="container alert d-flex justify-content-between align-items-center flex-wrap"
          role="alert"
          style={{
            backgroundColor: "#f8d7da",
            fontSize: "1.1rem",
            fontWeight: "500",
            padding: "1rem",
            borderRadius: "8px",
            marginTop: "1rem",
          }}
        >
          <p className={message?.error ? "text-danger" : "text-success"}>
            {message?.msg}
          </p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setMessage({ error: false, msg: "" });
              navigate("/");
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Form */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form
              className="bg-white p-4 p-md-5 rounded shadow-sm"
              onSubmit={handleSubmit}
              style={{
                border: "1px solid #ddd",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 className="text-center mb-4 text-dark">Update an Employee</h3>

              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter employee name"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter employee email"
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-bold">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>

              {/* Age */}
              <div className="mb-3">
                <label htmlFor="age" className="form-label fw-bold">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter age"
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label fw-bold">
                  Address
                </label>
                <textarea
                  id="address"
                  rows="3"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter address"
                ></textarea>
              </div>

              {/* Department */}
              <div className="mb-3">
                <label htmlFor="dept" className="form-label fw-bold">
                  Department
                </label>
                <input
                  type="text"
                  id="dept"
                  className="form-control"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  placeholder="Enter department"
                />
              </div>

              {/* Employment Type */}
              <div className="mb-3">
                <label htmlFor="empType" className="form-label fw-bold">
                  Employment Type
                </label>
                <input
                  type="text"
                  id="empType"
                  className="form-control"
                  value={empType}
                  onChange={(e) => setEmpType(e.target.value)}
                  placeholder="Enter employment type"
                />
              </div>

              {/* Salary */}
              <div className="mb-3">
                <label htmlFor="salary" className="form-label fw-bold">
                  Salary
                </label>
                <input
                  type="number"
                  id="salary"
                  className="form-control"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Enter salary"
                />
              </div>

              {/* Submit */}
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary w-100 fw-bold py-2"
                >
                  Submit
                </button>
              </div>

              <p className="text-center mt-3">
                Go to <Link to="/">home</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
