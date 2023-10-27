
import {Container,NavDropdown} from 'react-bootstrap'
const MyHeader=()=>{
return( <Container className="d-flex mt-3">
<h2 className='text-white'>Harry Potter</h2>
<NavDropdown
  title="Genres"
  id="basic-nav-dropdown"
  className="mt-1 mb-2 ms-3 pt-1 ps-1 pe-1 border border-black  text-white"
>
  <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
</NavDropdown>
</Container>
      
    )
}
export default MyHeader