import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{},
    isLoggedIn : false,
    sessionId: ""
}

const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state,action) =>{
            state.user=action.payload
            state.isLoggedIn=true
            state.sessionId=localStorage.getItem('session_id')

            localStorage.setItem('account_id',action.payload.id)
        }
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer
