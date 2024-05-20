import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer } from './Reducer'

const Cart = createContext({})

const Context = ({children}) => {
    // products data 
    const products =  {
        items: [
          {id: 1, name: "Item1", price: 10, selected: true ,image: './image/1.jpg'},
          {id: 2, name: "Item2", price: 12, selected: false, image:"./image/2.jpg"},
          {id: 3, name: "Item3", price: 13, selected: false, image:"./image/3.jpg"},
          {id: 4, name: "Item4", price: 14, selected: false, image:"./image/4.jpg"},
          {id: 5, name: "Item5", price: 15, selected: false, image:"./image/sports-1.jpg"},
          {id: 6, name: "Item6", price: 16, selected: false, image:"./image/sports-2.jpg"},
          {id: 7, name: "Item7", price: 17, selected: false, image:"./image/sports-3.jpg"},
          {id: 8, name: "Item8", price: 18, selected: false, image:"./image/sports-4.jpg"},
          {id: 9, name: "Item9", price: 19, selected: false, image:"./image/sports-5.jpg"},
          {id: 10, name: "Item10", price: 20, selected: false, image:"./image/sports-6.jpg"},
      
        ]
      }
    //   console.log(products)

      const [state ,setState] =useReducer(cartReducer,{
        products:products.items,
        cart:[],
      })
      console.log(products)
  return (
    <Cart.Provider value={{state ,setState}}>
        {children}
    </Cart.Provider>
  )
}
export default Context
export const CartState =()=>{
    return useContext(Cart);
}
