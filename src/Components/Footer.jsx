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
          <div className="col-md-6 text-md-end">
            {/* Quick Links */}
            <div className="mb-2">
              <a href="#services" className="text-white text-decoration-none me-3">Services</a>
              <a href="#team" className="text-white text-decoration-none me-3">Team</a>
              <a href="#contact" className="text-white text-decoration-none">Contact</a>
            </div>

            {/* Social Icons */}
            <div className="mt-2 d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://wa.me/7736379414" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/manuphilipjoseph/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://taxguru.in/author/manuphilip/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <i className="fas fa-globe"></i>
              </a>
              <a href="https://www.youtube.com/@ManuPhilipJoseph" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/camanuphilip_co/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
