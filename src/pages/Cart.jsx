import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from './../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/silices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/cart.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  console.log(cartItems);
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <Container>
        <Row>
          <Col lg="9" className="mb-5 mt-5">
            {cartItems.length === 0 ? (
              <h2
                className="fs-3 "
                style={{
                  padding: '50px 0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                No item added to the cart{' '}
              </h2>
            ) : (
              <table className="table bordered ">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quanlity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <Tr item={item} key={index} />
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg="3" className="mb-5 mt-5">
            <div>
              <h4 className="d-flex align-items-center mt-4 justify-content-between " style={{ color: 'black' }}>
                Subtotal
                <span className="fs-4 fw-bold ">${totalAmount}</span>
              </h4>
            </div>
            <p className="fs-6 mt-2">taxes and shipping will calculate in checkout</p>
            <div>
              <button className="buy__btn w-100 ">
                <Link to="/checkout">Checkout</Link>
              </button>
              <button className="buy__btn w-100 mt-3">
                <Link to="/shop">Continue Shopping</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
    toast.success('Delete item successfully');
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i whileTap={{ scale: 1.2 }} className="ri-delete-bin-line" onClick={deleteProduct}></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
