import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react"; // ✅ EyeOff instead of EyeClosed
import { registerUser } from "../Services/authentication.js";
import { mycontext } from "../../../context/Mycontaxt.jsx";

function Register() {
  const { user, setUser } = useContext(mycontext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!fullname || !email || !password) {
      toast.error("All fields are mandatory.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email address.");
      return;
    }

    try {
      const register = await registerUser(fullname, email, password);
      toast.success("Registration Successful!");
      setUser(register);
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5">
          <form
            className="bg-white p-4 p-md-5 rounded shadow"
            onSubmit={handleSubmit}
            style={{
              border: "1px solid #ddd",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3 className="text-center mb-4" style={{ color: "#333" }}>
              Register
            </h3>

            <div className="mb-3">
              <label htmlFor="fullname" className="form-label fw-bold">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                value={fullname}
                placeholder="Enter full name"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label fw-bold">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn position-absolute mt-3 top-50 end-0 translate-middle-y me-2 bg-transparent border-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <div className="mb-3">
              <button className="btn btn-primary w-100" type="submit">
                Register
              </button>
            </div>

            <div className="text-center">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
