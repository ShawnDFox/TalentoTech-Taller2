import { Col, Container, NavLink, Row } from "react-bootstrap";

function Menucomp()
{
    return(<>
    <Container fluid className="bg-primary text-light">
        <Row style={{height:"100px"}}>
            <Col className="d-flex align-items-center">
                <h1>Nav Menu</h1>
            </Col>
            <Col className=" d-flex align-items-center justify-content-end">
            <h1>
                <NavLink to="/">Logo</NavLink>
            </h1>
            </Col>
        </Row>
    </Container>
        
    </>);
}

export default Menucomp;