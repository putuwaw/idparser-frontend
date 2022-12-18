import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import idparser from '../images/idparser.png';

function NavigationBar() {
  return (
    <Navbar className='bg-blue-500 font-poppins text-white' expand="lg">
      <Container className="text-white">
        <Navbar.Brand href="/">
        <img
          src={idparser}
          width="45"
          height="45"
          className="d-inline-block align-top pr-3 text-white"
          alt="id"
        />
        <p className="text-white inline font-semibold">idParser</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <Nav.Link className="text-white" href="/parser">Parser</Nav.Link>
            <Nav.Link className="text-white" href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;