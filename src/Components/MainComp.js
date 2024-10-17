import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menucomp from "./Menucomp";
import App from "../App";
import ProductDetails from "./ProductDetails";
import FooterComp from "./FooterComp";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SetData } from "../reducers";

function MainComp()
{
    const dispatcher = useDispatch();

    useEffect(()=>{
        getData();
        //calculateCards();    
    
    },[])
    
    async function getData() {
      try{
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=10`);
        console.log(JSON.stringify(res));    
        dispatcher(SetData(res.data));
        
        
      }catch(Error)
      {
        console.log(`Found Error ${Error}`);
      }
    }

    return(<>
    <BrowserRouter>
      <Menucomp/>
        <Routes>
            <Route path='/' element={<App/>}/>  
            <Route path='/Details' element={<ProductDetails/>}/>
        </Routes>    
        <FooterComp></FooterComp>  
      </BrowserRouter>
    </>);
}
export default MainComp;