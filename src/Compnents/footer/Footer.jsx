import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-center">
      <footer className="footer  ">
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
