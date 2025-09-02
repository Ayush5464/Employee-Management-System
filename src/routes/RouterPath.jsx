import React, { useContext, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Compnents/Hero/Home";
import About from "../Compnents/about/About";
import Login from "../Compnents/Login/Login";
import Register from "../Compnents/register/Register";
import AddEmp from "../Compnents/addEmp/AddEmp";
import UpdateEmp from "../Compnents/updateEmp/UpdateEmp";
import ProtectedRoute from "../Compnents/ProtectedRoutes/ProtectedRoute";

function RouterPath() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about-us"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/addEmp"
          element={
            <ProtectedRoute>
              <AddEmp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateEmp"
          element={
            <ProtectedRoute>
              <UpdateEmp />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default RouterPath;
