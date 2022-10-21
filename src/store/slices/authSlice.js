import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:null,
    error:false,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state=initialState,action)=>{
            state.user=action.payload
            state.error=false
        }
    }
})

export const {setUser} =userSlice.actions
export default userSlice.reducer