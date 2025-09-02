import React, { useState } from "react";
import "./addEmp.css";
import { Link, useNavigate } from "react-router-dom";
import CURD_OP from "../Services/Employee.services";
import toast from "react-hot-toast";
import Navbar from "../navbar/Navbar";

function AddEmp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [dept, setDept] = useState("");
  const [empType, setEmpType] = useState("");
  const [salary, setSalary] = useState("");
  // const [message, setMessage] = useState({ error: false, msg: "" });

  const navigate = useNavigate();

  const handleSumbit = async (e) => {
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
      // setMessage({ error: true, msg: "All feilds are mandatory....." });
      toast.error("All fields are mandatory.....");
      return;
    }

    const newEmp = {
      name,
      email,
      phone,
      age,
      address,
      dept,
      empType,
      salary,
    };
    // setMessage("");
    try {
      await CURD_OP.addEmployee(newEmp);
      // setMessage({ error: false, msg: "New employee added successfully..." });
      toast.success("New employee added successfully...");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      console.log(error);

      // setMessage({ error: true, msg: error.message });
      toast.error(error.message);
    }
  };

  return (
    <div className="addEmp">
      <Navbar />
      {/* <div
        className="alert container container-fluid d-flex justify-content-center align-items-center w-50 mt-3 gap-5"
        role="alert"
        style={{
          fontSize: "1.4rem",
          backgroundColor: "#f8d7da",
          fontWeight: "500",
          padding: "1rem",
          borderRadius: "8px",
          margin: "1rem, 0",
        }}
      >
        <p
          className={`${
            message?.error ? "text-danger" : "text-success"
          } d-flex justify-content-start align-items-center  m-0`}
        >
          {message.msg}
        </p>
        <div className="">
          <button
            className="btn btn-danger"
            onClick={() => {
              setMessage("");
              // navigate("/");
            }}
          >
            close
          </button>
        </div>
      </div> */}

      <div className="form-container container-fluid d-flex justify-content-center align-items-center mt-3">
        <form
          action=""
          className="bg-white p-5 rounded shadow-lg w-50"
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
          }}
          onSubmit={handleSumbit}
        >
          <h3 className="text-center mb-4" style={{ color: "#333" }}>
            Add an Employee
          </h3>
          <div>
            <div className="mb-3 ">
              <label
                htmlFor="name"
                className="form-label d-flex  align-items-center  "
                style={{ fontWeight: "bold" }}
              >
                Name:
              </label>
              <input
                type="text"
                className=" form-control w-100 rounded border-none"
                name="name"
                id="name"
                value={name}
                placeholder="Enter Employee Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{ padding: "13px" }}
              />
            </div>
            <div className="mb-3 ">
              <label
                htmlFor="email"
                className="form-label d-flex  align-items-center  "
                style={{ fontWeight: "bold" }}
              >
                Email:
              </label>
              <input
                type="email"
                className="form-control w-100 rounded border-none"
                name="email"
                id="email"
                value={email}
                placeholder="Enter Employee email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                style={{ padding: "13px" }}
              />
            </div>
            <div className="mb-3 ">
              <label
                htmlFor="phone"
                className="form-label d-flex  align-items-center  "
                style={{ fontWeight: "bold" }}
              >
                Phone:
              </label>
              <input
                type="number"
                className="form-control w-100 rounded border-none"
                name="phone"
                id="phone"
                value={phone}
                placeholder="Enter Employee phone number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                style={{ padding: "13px" }}
              />
            </div>
            <div className="mb-3 ">
              <label
                htmlFor="age"
                className="form-label d-flex  align-items-center  "
                style={{ fontWeight: "bold" }}
              >
                Age:
              </label>
              <input
                type="number"
                className="form-control w-100 rounded border-none"
                name="age"
                id="age"
                value={age}
                placeholder="Enter Employee age"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                style={{ padding: "13px" }}
              />
            </div>
            <div className="mb-3 ">
              <label
                htmlFor="address"
                className="form-label d-flex  align-items-center  "
                style={{ fontWeight: "bold" }}
              >
                Address
              </label>
              <textarea
                type="text"
                className="form-control w-100 rounded border-none"
                name="address"
                id="address"
                value={address}
                placeholder="Enter Employee address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                style={{ padding: "13px" }}
              />
            </div>
            <div className="mb-3 ">
              <label
                htmlFor="dept"
                className="form-label d-flex  align-items-center  "
                style={{ fontWeight: "bold" }}
              >
                Department:
              </label>
              <input
                type="text"
                className="form-control w-100 rounded border-none"
                name="dept"
                id="dept"
                value={dept}
                placeholder="Enter Employee department"
                onChange={(e) => {
                  setDept(e.target.value);
                }}
                style={{ padding: "13px" }}
              />
            </div>

            <div className="mb-3 ">
              <label
                htmlFor="empType"
                className="form-label d-flex  align-items-center  "
                style={{ fontWeight: "bold" }}
              >
                Employee Type:
              </label>
              <input
                type="text"
                className="form-control w-100 rounded border-none"
                name="empType"
                id="empType"
                value={empType}
                placeholder="Enter Employee Employee Type"
                onChange={(e) => {
                  setEmpType(e.target.value);
                }}
                style={{ padding: "13px" }}
              />
            </div>
            <div className="mb-3 ">
              <label
                htmlFor="salary"
                className="form-label d-flex  align-items-center  "
                style={{ fontWeight: "bold" }}
              >
                Salary:
              </label>
              <input
                type="number"
                className="form-control w-100 rounded border-none"
                name="salary"
                id="salary"
                value={salary}
                placeholder="Enter Employee salary"
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                style={{ padding: "13px" }}
              />
            </div>
          </div>

          <div className="mb-2 d-flex justify-content-center align-items-center ">
            <button className="btn btn-primary w-100">Sumbit</button>
          </div>
          <div className="mb-2 d-flex justify-content-center align-items-center ">
            <p>
              Go to <Link to={"/"}>Home</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmp;
