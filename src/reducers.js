import { createSlice } from "@reduxjs/toolkit"

const InitialState={
    Data:[],
    CurrentPage:1,
    DisplayProduct:[]
}

const reducers = createSlice({
    name:"Vars",
    initialState:InitialState,
    reducers:{
        SetData:(state,action)=>{
            state.Data = action.payload;
        },
        setDisplayProduct:(state,action)=>{
            state.DisplayProduct = action.payload;
        }
    }
});

export const {SetData,setDisplayProduct} = reducers.actions;
export default reducers.reducer;