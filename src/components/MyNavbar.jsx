import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


const MyNavbar = () => {
 
  return (
    <Navbar collapseOnSelect expand="lg">
        
      <Container fluid className='mt-1'>
      <img src="../assets/logo.png" alt="logo" style={{ width: "120px" }} />
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      
          <Nav className="me-auto fs-5 fw-bold ms-3 text-secondary ms-2 ">
            <Link to='/' className='nav-link text-white'>Home</Link>
            <Link to='/tvshow' className='nav-link text-secondary ms-2'>Tv Shows</Link>
            <Link to='/'  className='nav-link text-secondary ms-2'>Movies</Link>
            <Link to='/' className='nav-link text-secondary ms-2'>Recently Added</Link>
            <Link to='/' className='nav-link text-secondary ms-2'>My List</Link>
          </Nav>
          <Nav className='fs-4 mt-1 me-2 fw-bold'>
          <Nav.Link href="#"><i class="bi bi-search text-white"></i></Nav.Link>
          <Nav.Link href="#" className='text-white fs-6 mt-2'>KIDS</Nav.Link>
          <Nav.Link href="#"><i class="bi bi-bell text-white me-3"></i></Nav.Link>
          <Nav.Link href="#"><i class="bi bi-person-circle text-white"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default MyNavbar