import { Card } from "react-bootstrap";
import { setDisplayProduct } from "../reducers";

function ProductComp(props)
{
    return(
    <>
        <Card style={{width:"300px",height:"520px", margin:"5px"}} onClick={()=>{setDisplayProduct(props.data); console.log(`Clicked on ${props.data.title}`)}}>
            <Card.Img src={props.data.images[0]}>

            </Card.Img>
            <Card.Body>
                <Card.Title className="truncate-overflow-Title ">
                    <h4><b>{props.data.title}</b></h4>
                </Card.Title>
                <Card.Text className="truncate-overflow">
                    {props.data.description}
                </Card.Text>

            </Card.Body>
            <Card.Footer> Price: ${props.data.price}</Card.Footer>
        </Card>
    </>
    );
}

export default ProductComp;