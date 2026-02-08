import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import '../style/Orders.css';
import { toast } from 'react-toastify';

const Orders = () => {
  const { backendUrl, token, currency, navigate } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        toast.error("Please login to view your orders");
        navigate('/login');
        return;
      }

      const response = await fetch(`${backendUrl}/api/v1/get-user-orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          userId: localStorage.getItem('userId'),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setOrderData(result.data);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to load orders");
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
    <div className="orders-container">
      <div className="orders-title">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {orderData.map(order => (
        <div className="order-card" key={order._id}>

          {/* LEFT – PRODUCTS */}
          <div className="order-products">
            {order.items.map((item, index) => (
              <div className="order-left" key={index}>
                <img
                  src={item.product?.images?.[0]}
                  alt={item.product?.name}
                  className="order-image"
                />

                <div>
                  <p className="order-name">{item.product?.name}</p>

                  <div className="order-meta">
                    <p>{currency}{item.product?.price}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="order-center">
            <p>
              Date: {new Date(order.date).toDateString()}
            </p>
            <p>
              Payment: {order.paymentMethod}
            </p>
          </div>

          <div className="order-right">
            <div className="order-status">
              <span className="status-dot"></span>
              <p>{order.status}</p>
            </div>

            <p className="order-total">
              Total: {currency}{order.amount}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Orders;
