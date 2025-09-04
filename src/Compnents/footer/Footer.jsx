import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-center ">
      <footer className="footer bg-light text-dark p-4 mt-5">
        <aside>
          <p className="text-center mt-5">
            Copyright © {new Date().getFullYear()} - All right reserved by
            OptiStaff OptiStaff Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
