import React, { useEffect, useState } from 'react'
import { CartState } from './Context'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import '../components/Style.css';

const Cart = () => {
    const [total ,setTotal]=useState(0);

    const { state : {cart}, setState,} = CartState();

    useEffect(() => {
        setTotal(
          cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
      }, [cart]);
    
  return (
    <div className='cart'>
      Cart
      <div className='productContainter'>
        <ListGroup>
            {cart.map((product) => (
                <ListGroup.Item key={product.id} style={{display:"flex"}}>
                <Row>
                <Col md={2}>
                  <Image src={product.image} alt={product.name} fluid rounded style={{ width: '18rem', margin: '1rem' }}/>
                </Col>
                <Col md={2}>
                  <span>{product.name}</span>
                </Col>
                <Col md={2}>₹ {product.price}</Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={product.qty}
                    onChange={(e) =>
                      setState({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: product.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(product.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      setState({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
      <div className="filterSummury">
        <span className='title'>Subtotal ({cart.length}) item</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>

    </div>
  )
}

export default Cart
