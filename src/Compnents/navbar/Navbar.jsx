import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { mycontext } from "../../../context/Mycontaxt";
import { logoutUser } from "../Services/authentication";
import { Menu, X } from "lucide-react"; // Hamburger icon from Lucide

export default function Navbar() {
  const { user, setUser } = useContext(mycontext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Mobile toggle state

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("User logged out successfully...");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error("Some internal Error happened please try again later");
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <h2 className="logo-cont" onClick={() => navigate("/")}>
        OptiStaff
      </h2>

      <div className={`links-cont ${menuOpen ? "show" : ""}`}>
        <ul className="link-list-cont">
          <li className="navabarBtn" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="navabarBtn" onClick={() => navigate("/addEmp")}>
            Add New
          </li>
          <li className="navabarBtn" onClick={() => navigate("/about-us")}>
            About Us
          </li>
        </ul>
      </div>

      <div className="user-cont">
        <div className="dropdown">
          <img
            className="dropdown-toggle user-img rounded-5"
            data-bs-toggle="dropdown"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
            alt="user-img"
          />
          <ul className="dropdown-menu">
            {user ? (
              <>
                <li
                  className="dropdown-item"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </li>
                <li>
                  <Link className="dropdown-item" to="/help">
                    Help
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </div>
  );
}
