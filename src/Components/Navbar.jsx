import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center fs-2">
          Manu Philip & Company
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="fs-4">About</Nav.Link>
            <Nav.Link href="#services" className="fs-4">Services</Nav.Link>
            <Nav.Link href="#team" className="fs-4">Team</Nav.Link>
            <Nav.Link href="#contact" className="fs-4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
