import {createSlice} from '@reduxjs/toolkit';
export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        navbar:{
            home:true,
            faq:false,
            contact:false,

        }
    },
    reducers:{
        home:(state)=>{
            state.navbar.home=true;
            state.navbar.faq=false;
            state.navbar.contact=false;
        }
        ,
        faq:(state)=>{
            state.navbar.home=false;
            state.navbar.faq=true;
            state.navbar.contact=false;
        },
        contact:(state)=>{
            state.navbar.home=false;
            state.navbar.faq=false;
            state.navbar.contact=true;
        }
    }
})
export const {home,faq,contact} = navbarSlice.actions;
export default navbarSlice.reducer;