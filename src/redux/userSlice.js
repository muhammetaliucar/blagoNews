import {createSlice} from '@reduxjs/toolkit';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state, action) => {
      state.userInfo = action.payload;
    },
    getUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;
