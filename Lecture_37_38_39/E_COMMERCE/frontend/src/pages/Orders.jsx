import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
// import axios from 'axios';
import '../style/Orders.css';

const Orders = () => {
  const { backendUrl, token, currency,cartItems } = useContext(ShopContext);
  const [orderData, setOrderData] = useState(cartItems);
  console.log(orderData);

  // const loadOrderData = async () => {
  //   try {
  //     if (!token) return;

  //     const response = await axios.post(
  //       backendUrl + '/api/order/userorders',
  //       {},
  //       { headers: { token } }
  //     );

  //     if (response.data.success) {
  //       let allOrdersItem = [];

  //       response.data.orders.forEach(order => {
  //         order.items.forEach(item => {
  //           allOrdersItem.push({
  //             ...item,
  //             status: order.status,
  //             payment: order.payment,
  //             paymentMethod: order.paymentMethod,
  //             date: order.date
  //           });
  //         });
  //       });

  //       setOrderData(allOrdersItem.reverse());
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   loadOrderData();
  // }, [token]);

  return (
    <div className="orders-container">
      <div className="orders-title">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div className="order-card" key={`${item._id}-${index}`}>
            <div className="order-left">
              <img src={item.image[0]} alt="" className="order-image" />

              <div>
                <p className="order-name">{item.name}</p>

                <div className="order-meta">
                  <p>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>

                <p className="order-text">
                  Date:
                  <span>{new Date(item.date).toDateString()}</span>
                </p>

                <p className="order-text">
                  Payment:
                  <span>{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            <div className="order-right">
              <div className="order-status">
                <span className="status-dot"></span>
                <p>{item.status}</p>
              </div>

              <button className="track-btn" onClick={loadOrderData}>
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;