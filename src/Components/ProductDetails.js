import { useEffect, useState } from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function ProductDetails()
{
    const [Id] = useSearchParams();
    const Data = useSelector(state => state.Vars.Data);
    const [ProductData,SetProductData] = useState(
        {"id":25,
            "title":"",
            "price":0,
            "description":"",
            "images":[
                "",
                "",
                ""],
            "creationAt":"",
            "updatedAt":"",
            "category":{"id":0,
                "name":"0",
                "image":"",
                "creationAt":"",
                "updatedAt":""}}
    );

    useEffect(()=>{
        let id = Id.get("Id");
        
        if(Data!=null )
        {
            /*console.log(`URL has id? ${Id.has("Id")}, id value: ${id}`);
            console.log(Data.find(
                (obj)=>{
                    console.log(obj.id)
                    return obj.id == id;
                    
                }
            ));*/
            SetProductData(Data.find(obj=>obj.id == id));
            console.log(ProductData);
        }
        

    },[Data])
    

    //console.log(`props id = ${Id.get("Id")}`)
    return(
        <>
            
            <Container style={{height:"700px"}}>
                <Row className="d-flex align-items-center">
                {  (!!ProductData) &&(
                    <Col lg="6" className="align-middle">
                        <Carousel className="d-flex align-items-center">
                            { ProductData.images.map((d,i)=>(
                            <CarouselItem key={i}>
                                <img style={{width:"600px"}} src={d}></img>
                            </CarouselItem>
                            ))}
                        </Carousel>
                        
                        
                    </Col>
                    ) }
                    <Col>    
                        <h3>{ProductData.title}</h3>
                        <p> {ProductData.description}</p>                  
                        <h5 >Price ${ProductData.price}</h5>
                    </Col>
                </Row>
            </Container>
        </>
    )
} 
export default ProductDetails;