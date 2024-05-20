import React from 'react'
import './Style.css'
import { Button, Card } from 'react-bootstrap';
import { CartState } from '../Cart_context/Context';



const SingleProducts = ({product}) => {

    const{state:{cart}, setState} = CartState();
    console.log('hi',cart)
  return (
    <div className='singelProducts'>
      <Card style={ {width: '18rem', margin: '1rem'} }>
      <Card.Img variant="top" src={product.image} alt={product.name} style={{ width: '18rem', margin: '1rem' }}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {cart.some((p) => p.id === product.id) ? (
            <Button
              variant="danger"
              onClick={(e) =>
                setState({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={(e) =>
                setState({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            //   disabled={!product.inStock}
            >
              {/* {!product.inStock ? "Out of Stock" : "Add to Cart"} */}
              Add to Cart
            </Button>
          )} 
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleProducts;
