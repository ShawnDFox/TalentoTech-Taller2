import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SetData } from './reducers';
import { Col, Container, Row } from 'react-bootstrap';
import ProductComp from './Components/ProductComp';

import FilterComp from './Components/FilterComp';
import { Link } from 'react-router-dom';

//Contains galery, menu,footer

function App() {

const dispatcher = useDispatch();
const ProductData = useSelector(state => state.Vars.Data);
const currentPage = useSelector(state => state.Vars.currentPage);

var pageMaxReg = 5;
var lastReg = currentPage * pageMaxReg;
var FirstReg = lastReg - pageMaxReg;

const displayList = ProductData.slice(FirstReg,lastReg);

let loaded = 0;

const Cards =[];
function calculateCards(){
  for(let i=0;i<ProductData.length;i++)
  {
    if(i%5==0)
    {
      //Cards
    }
  }
}
  return (
    <div className="App">
     
      <body>
        <Container fluid>
          
          <Row>
            <Col lg={2}>
              <FilterComp></FilterComp>
            </Col>
            <Col className='d-flex flex-wrap'>
            {ProductData === null && "Loading"}
              {ProductData.map((d,i)=>(                
                <div key={i}>    
                    <Link to={"Details?Id="+d.id}>
                    <ProductComp data={d}></ProductComp>
                    </Link>                             
                </div>                
              ))}
            </Col>
          </Row>
        </Container>
      </body>         
    </div>
  );
}

export default App;
