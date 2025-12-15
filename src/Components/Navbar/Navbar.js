import Button from 'react-bootstrap/Button';
import { FaUserCircle  } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';



function NavbarStore() {

  
  const [searchText, setSearchText] = useState("");

  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const totalQuantity = cartItems.reduce(
      (sum, item) => sum + (item.quantity || 0),
      0
    );

    setCartCount(totalQuantity);
  }

  updateCartCount(); // initial load

  window.addEventListener("cartUpdated", updateCartCount);

  return () => {
    window.removeEventListener("cartUpdated", updateCartCount);
  };
}, []);

   
  let navigate = useNavigate();
  console.log(searchText)

  function searchProduct(){
    navigate(`/products?searchProduct=${searchText}`);
  }


  return (
  <div >

 
    <Navbar style={{backgroundColor:"#2fd1f1ff"}} expand="lg" 
    className=" fixed-top">
      <Container fluid>
        {/* <Link to="/" className="text-decoration-none text-dark"> */}
        <Navbar.Brand 
         href="/"><strong className='m-4 p-4'
         style={{color:"#050781ff" ,fontSize:"30px"}}>ShopEase</strong></Navbar.Brand>
        {/* </Link> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
         </Nav>
          <Form className="d-flex me-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
               value={searchText}
               name={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
            <Button onClick={searchProduct}
             variant="btn btn-primary">Search</Button>
          </Form>

           {/* CART ICON */}
          <Nav className="d-flex align-items-center">
            <Link to="/mycart" className="text-decoration-none text-dark position-relative">
              <FaShoppingCart 
  

              size={28} />
              <span 
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  fontSize: "12px",
                  padding: "2px 6px",
                  borderRadius: "50%"
                }}
              >
                {cartCount}
              </span>
            </Link>
          </Nav>

          {/* User Dropdown */}
              <NavDropdown className='ms-4'
                title={< FaUserCircle  size={28} />}
                id="user-dropdown"
                align="end"
              >
                {!localStorage.getItem("isLoggedIn") ? (
                  <>
                    <NavDropdown.Item className='dropdown-hover' as={Link} to="/login">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item className='dropdown-hover' as={Link} to="/register">
                      Register
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item className='dropdown-hover' as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                    className='dropdown-hover'
                      onClick={() => {
                        localStorage.clear();
                        navigate('/login');
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
     </div>
    
  );
}

export default NavbarStore;