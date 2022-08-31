import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cart-slice";
import * as S from "./style";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { useLocation } from "react-router";

function Card({ product, onRemove }) {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const CART_URL = "/cart";

  const cartItemAddHandler = (product) => {
    dispatch(addToCart({ ...product, cartQuantity: 1 }));
  };

  return (
    <S.CardContainer value={product.category}>
      {location !== CART_URL ? (
        <S.CardCartBtn onClick={() => cartItemAddHandler(product)}>
          <IoMdAddCircle size="1.2rem" color="#6B23E0" />
        </S.CardCartBtn>
      ) : (
        <S.CardCartBtn onClick={onRemove}>
          <IoMdRemoveCircle size="1.2rem" color="#6B23E0" />
        </S.CardCartBtn>
      )}

      <S.CardMainTitle>{product.title}</S.CardMainTitle>
      <S.CardAmountText>{`${product.amount} 원`}</S.CardAmountText>
      <S.CardInfoText>{product.institution}</S.CardInfoText>
    </S.CardContainer>
  );
}

export default Card;
