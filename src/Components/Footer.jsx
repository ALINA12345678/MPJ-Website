import React from "react";

function Footer() {
  return (
    <footer className="text-center text-lg-start py-4" style={{ backgroundColor: "#3A5A40", color: "#fff" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Company Info */}
          <div className="col-md-6 text-md-start mb-3 mb-md-0">
            <h6 className="mb-1">© {new Date().getFullYear()} Manu Philip & Company</h6>
            <p className="mb-0">Helping businesses grow with clarity & compliance.</p>
          </div>

          {/* Right: Quick Links */}
          <div className="col-md-6 text-md-end">
            <a href="#services" className="text-white text-decoration-none me-3">Services</a>
            <a href="#team" className="text-white text-decoration-none me-3">Team</a>
            <a href="#contact" className="text-white text-decoration-none">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
