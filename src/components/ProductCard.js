import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { add, remove } from "../store/cartSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const cartList = useSelector((state) => state.cartState.cartList);
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const { id, name, price, image } = product;
  useEffect(() => {
    const productInCard = cartList.find((item) => item.id === id);

    if (productInCard) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
