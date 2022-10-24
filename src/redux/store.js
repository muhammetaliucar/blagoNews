import { configureStore } from '@reduxjs/toolkit'
import user from "./userSlice"

export default configureStore({
  reducer: {
    // es6 nin bize sağladığı avantaj sayesinde theme: theme yerine theme, şeklinde de kullanabiliriz.
    user,
  }
})