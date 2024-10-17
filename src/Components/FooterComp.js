import { Col, Container, Row } from "react-bootstrap";

function FooterComp()
{
    return(<>
    <Container fluid>
        <Row className="bg-dark text-light" style={{height:"150px"}}>
            <Col className="d-flex align-items-center justify-content-center">
                <h1>Footer</h1>
            </Col>
        </Row>
    </Container>
    </>);
}

export default FooterComp;