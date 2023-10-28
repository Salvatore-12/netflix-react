
import {Container,NavDropdown,Nav,} from 'react-bootstrap'
const MyHeader=()=>{
return( 
<div fluix className='d-flex justify-content-between mt-2'>
<Container className="d-flex my-0 justify-content-between ms-3">

  <div className='d-flex ms-0'>
  <h2 className='text-white fs-1 me-1'>TV Shows</h2>
<NavDropdown
  title="Genres "
  id="basic-nav-dropdown"
  className="mt-2 mb-2 ms-4 ps-2 pe-2 pt-1 fs-5 border border-secondary text-white "
>
  <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
</NavDropdown>
  </div>
</Container>
<div className=' d-flex ms-4 me-4 pe-4 fs-4 fw-bold text-white'>
  <Nav.Link href="#" className='me-3'><i class="bi bi-grid"></i></Nav.Link>
  <Nav.Link href="#" className='ms-4'><i class="bi bi-grid-3x3"></i></Nav.Link>
  </div>

</div>

    )
}
export default MyHeader