import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Heading from '../Heading';
import CardDesign from './productComponts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



// Nav-Bar:

export default function NavBar() {

  const [item, setItem] = useState(0);

    return (

      <>

      {/* NavBar */}

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              
              {/* Shop Dropdown */}
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
  
          {/* count button */}
                      <div className='CountBtn'>
                          <button className="btn btn-outline-dark" type="button">
                              < ShoppingCartIcon />
                              Cart 
                              <span className="badge bg-dark text-white ms-1 rounded-pill">{item}</span>
                          </button>
                      </div>
        </Container>
      </Navbar>

      {/* Header */}
      <Heading/>

      {/* Card Design */}
     
      < CardDesign 
      
      count = {item}
      setCount = {setItem}
      
      />

    </>
    );
  }
