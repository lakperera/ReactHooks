import React, { useState } from 'react'
import { CartState } from '../Cart_context/Context'
// import { CartState } from '../App'
import {Table , Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Style.css';
import SingleProducts from './SingleProducts';

const Home = () => {
    const [rows , setRows] = useState([]);
    const addRow = (product) => {
        const newRow = {
          id: rows.length + 1,
          name: product.name,
          price: product.price,
        };
        setRows([...rows, newRow]);
      };
    

    const {
        state : {products},

    } = CartState();
    console.log(products)
  return (
    <div className='home'>
        <h1>Shopping Cart</h1>
        
        {/* <div className='productContainer'>
             {products.map((product) => (
            <div className='product' key={product.id}>
                <div className='pro'>
                    <h3>{product.name}</h3>
                    <h4>Price : {product.price}</h4>
                </div>
                <div>
                    
                </div>
            </div>
            ))} 
        </div> */}
        
    {/* <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>


increces the total row
        {rows.map((row) => (
          <tr key={row.id}>
            <td> {row.id}</td>
            <td> {row.name}</td>
            <td> {row.price}</td>
          </tr>
        ))}

        
      </tbody>
    </Table> */}
    <div className='productContainer'>
    {
            products.map((product) => (
            <div key={product.id}>
              <SingleProducts product={product} key={product.id}/>
            </div>
            ))
    }
    
    </div>

    
    </div>
  )
}

export default Home;
