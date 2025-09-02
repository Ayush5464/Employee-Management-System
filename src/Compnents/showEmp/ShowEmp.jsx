import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CURD_OP from "../Services/Employee.services";
import "./showEmp.css";

function ShowEmp() {
  const navigate = useNavigate();
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CURD_OP.getEmployess();
        setEmpList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (empId) => {
    try {
      await CURD_OP.deleteEmployee(empId);
      alert("User deleted successfully.");
      setEmpList((prev) => prev.filter((emp) => emp.id !== empId)); // ✅ fixed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="showEmp">
      <div className="table-wrapper">
        <table className="emp-table">
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Address</th>
              <th>Type</th>
              <th>Dept</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {empList.map((emp, idx) => (
              <tr key={emp.id}>
                <td>{idx + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.age}</td>
                <td>{emp.address}</td>
                <td>{emp.empType}</td>
                <td>{emp.dept}</td>
                <td>{emp.salary}</td>
                <td>
                  <button
                    className="btn btn-edit"
                    onClick={() => navigate("/updateEmp", { state: emp })}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowEmp;
