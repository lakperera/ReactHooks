import React, { useState } from 'react'
import { CartState } from '../Cart_context/Context'
// import { CartState } from '../App'
import {Table , Button} from 'react-bootstrap';

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
    <div>
        <h1>Shopping Cart</h1>
        
        <div className='productContainer'>
            {/* {products.map((product) => (
            <div className='product' key={product.id}>
                <div className='pro'>
                    <h3>{product.name}</h3>
                    <h4>Price : {product.price}</h4>
                </div>
                <div>
                    
                </div>
            </div>
            ))} */}
        </div>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>


{/* increces the total row */}
        {/* {rows.map((row) => (
          <tr key={row.id}>
            <td> {row.id}</td>
            <td> {row.name}</td>
            <td> {row.price}</td>
          </tr>
        ))} */}

        {
            products.map((product) => (
                <tr key={product.id} style={{padding:'500px'}}>
                <td >{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><Button bsStyle="primary" onClick={(e)=>addRow(product)}>Add to Cart</Button></td>
                </tr>
            ))
        }
      </tbody>
    </Table>
       
    </div>
  )
}

export default Home;
