import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const MyNavbar = () => {
 
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
      <img src="../assets/logo.png" alt="logo" style={{ width: "100px" }} />
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#" className='text-secondary'>Tv Show</Nav.Link>
            <Nav.Link href="#" className='text-secondary'>Movies</Nav.Link>
            <Nav.Link href="#" className='text-secondary'>Recently Added</Nav.Link>
            <Nav.Link href="#" className='text-secondary'>My List</Nav.Link>
          </Nav>
          <Nav className='fs-5'>
          <Nav.Link href="#"><i class="bi bi-search text-white"></i></Nav.Link>
          <Nav.Link href="#" className='text-white'>KIDS</Nav.Link>
          <Nav.Link href="#"><i class="bi bi-bell text-white"></i></Nav.Link>
          <Nav.Link href="#"><i class="bi bi-person-circle text-white"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default MyNavbar