import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../../src/Redux/Slice"

export default configureStore({
  reducer: {
    userData: userReducer
  }
})