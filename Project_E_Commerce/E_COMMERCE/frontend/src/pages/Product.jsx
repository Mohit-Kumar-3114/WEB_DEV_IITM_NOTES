import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import "../style/Product.css";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setMainImage(product.images[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="product-hidden">No product found</div>;

  return (
    <div className="product-container">
      <div className="product-wrapper">
        <div className="product-images">
          <div className="thumbnail-list">
            {productData.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="thumbnail"
                onClick={() => setMainImage(item)}
              />
            ))}
          </div>

          <div className="main-image">
            <img src={mainImage} alt="" />
          </div>
        </div>

        <div className="product-info">
          <h1>{productData.name}</h1>

          <div className="rating">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <span>(122)</span>
          </div>

          <p className="price">
            {currency}
            {productData.price}
          </p>

          <p className="description">{productData.description}</p>

          <div className="size-section">
            <p>Select Size</p>
            <div className="sizes">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`size-btn ${item === size ? "active" : ""}`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(productData._id, size)}
           >
            ADD TO CART
          </button>

          <hr />

          <div className="policy-text">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>


      <div className="product-desc-section">
        <div className="tabs">
          <b>Description</b>
          <span>Reviews (122)</span>
        </div>

        <div className="desc-box">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet.
          </p>
          <p>
            E-commerce websites typically display products with descriptions,
            images, prices, and variations like sizes or colors.
          </p>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        productId={productData._id}
      /> 
    </div>
  );
};

export default Product;