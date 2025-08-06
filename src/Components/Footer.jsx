import React from "react";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start py-4"
      style={{ backgroundColor: "#3A5A40", color: "#fff" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Company Info */}
          <div className="col-md-6 text-md-start mb-3 mb-md-0">
            <h6 className="mb-1">
              © {new Date().getFullYear()} Manu Philip & Company
            </h6>
            <p className="mb-0">
              Helping businesses grow with clarity & compliance.
            </p>
          </div>

          {/* Right: Quick Links + Social Icons */}
          <div className="col-md-6 text-md-end">
            <a
              href="#services"
              className="text-white text-decoration-none me-3"
            >
              Services
            </a>
            <a
              href="#team"
              className="text-white text-decoration-none me-3"
            >
              Team
            </a>
            <a href="#contact" className="text-white text-decoration-none me-3">
              Contact
            </a>

            {/* Social Icons */}
            <a
              href="https://wa.me/7736379414"
              className="text-white ms-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/manuphilipjoseph/"
              className="text-white ms-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://taxguru.in/author/manuphilip/"
              className="text-white ms-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
            
            <a
              href="https://www.youtube.com/@ManuPhilipJoseph"
              className="text-white ms-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            
            <a
              href="https://www.instagram.com/camanuphilip_co/"
              className="text-white ms-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
