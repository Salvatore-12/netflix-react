import { Container,Row,Col,Nav } from "react-bootstrap";

const MyFooter=()=>(<Container>
    <Row>

        <Col> 
        <Nav.Link href="#"><i class="bi bi-search text-white"></i></Nav.Link>
          <Nav.Link href="#" className='text-white'>KIDS</Nav.Link>
          <Nav.Link href="#"><i class="bi bi-bell text-white"></i></Nav.Link>
          <Nav.Link href="#"><i class="bi bi-person-circle text-white"></i></Nav.Link></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        
    </Row>
</Container>)