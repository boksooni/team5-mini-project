import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/UI/Card";
import { removeFromCart } from "../../store/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartItemRemoveHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>장바구니</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <h3>담은 대출 상품이 없습니다.</h3>
          <div>
            <Link to="/allproduct">
              <p>대출 상품 보러가기</p>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h3>담은 대출 상품 목록</h3>
          <div>
            {cart.cartItems &&
              cart.cartItems.map((item) => (
                <div key={item.id}>
                  <Card
                    product={item}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
