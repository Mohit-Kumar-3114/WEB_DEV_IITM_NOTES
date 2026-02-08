import  { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import '../style/Cart.css';
import { toast } from 'react-toastify';

const Cart = () => {
  const { products, currency, cartItems, navigate, updateQuantity, token } = useContext(ShopContext);
  console.log(cartItems);

  return (
    <div className="cart-container">
      <div className="cart-title">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartItems.length === 0 && <p className="empty-cart-message">Your cart is empty</p>}
        {cartItems?.map((item) => {
         const productData = products.find((p) => p._id === item.productId);

          if (!productData){
            return <p key={`${item._id}-${item.size}`}> Product not found</p>
          }

          return (
            <div className="cart-item" key={`${item._id}-${item.size}`}>
              <div className="cart-item-left">
                <img
                  src={productData.images[0]}
                  alt=""
                  className="cart-image"
                />

                <div>
                  <p className="cart-product-name">
                    {productData.name}
                  </p>

                  <div className="cart-details">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="cart-size">{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                min={1}
                value={item.quantity}
                className="cart-quantity"
                onChange={(e) =>
                  updateQuantity(
                    item.productId,
                    item.size,
                    Number(e.target.value)
                  )
                }
              />

              <img
                src={assets.bin_icon}
                alt=""
                className="cart-delete"
                onClick={() =>
                  updateQuantity(item.productId, item.size, 0)
                }
              />
            </div>
          );
        })}
      </div>

      <div className="cart-footer">
        <div className="cart-total-wrapper">
          <CartTotal />

          <div className="checkout-btn-wrapper">
            <button
              className="checkout-btn"
              onClick={() => {
                if(!token){
                  toast.error("Please login to proceed to checkout");
                  navigate('/login');
                  return;
                }
                navigate('/place-order');
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;