import * as S from "./style";
import { BsCart } from "react-icons/bs";

function Card({ products }) {
  return (
    <S.CardContainer value={products.categories}>
      <S.CardCartBtn>
        <BsCart size="1.2rem" />
      </S.CardCartBtn>
      <S.CardMainTitle>{products.title}</S.CardMainTitle>
      <S.CardAmountText>{`${products.amount} 원`}</S.CardAmountText>
      <S.CardInfoText>{products.institution}</S.CardInfoText>
    </S.CardContainer>
  );
}

export default Card;
