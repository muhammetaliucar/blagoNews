import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name:'user',
    initialState: {
        userInfo: {},
      },
    reducers:{
        setUser: (state, action) => {
            state.userInfo = action.payload;
          },
        logout: (state,action) =>{
          state.userInfo = action.payload;
        }  

    }  
})
export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer