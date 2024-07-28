import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user: {},
    addCartData: [],
    favorite:[]
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },
    addToCart: (state, action) => {
      const product = state.addCartData.find((item) => item.id === action.payload.id)
      if(!product){
          state.addCartData.push(action.payload)
      }
    },
    singleItemRemove:(state,action)=>{
        state.addCartData =  state.addCartData.filter((item)=>item?.id !== action?.payload?.id)
    },

     productIncrement:(state,action)=>{

       const existingIte = state.addCartData.find((item)=>item?.id === action?.payload?.id)
       if(existingIte){
        existingIte.quentity ++
       }
     },
     
     productDecrement:(state,action)=>{
      const decrement = state.addCartData.find((item)=>item?.id === action.payload.id)
      if(decrement.quentity === 1){
        decrement.quentity === 1
      }else{
        decrement.quentity--
      }
     },

     addFavorite:(state,action)=>{
       const existing = state.favorite.find((item)=>item?.id === action.payload.id)
       if(!existing){
        state.favorite.push(action?.payload)
       }
     }
  }
})

// Action creators are generated for each case reducer function
export const { addUser, addToCart,singleItemRemove,productIncrement,productDecrement,addFavorite} = counterSlice.actions

export default counterSlice.reducer
