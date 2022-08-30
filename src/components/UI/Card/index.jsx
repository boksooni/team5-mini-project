import * as S from "./style";
import { IoMdAddCircle } from "react-icons/io";

function Card({ product }) {
  return (
    <S.CardContainer value={product.category}>
      <S.CardCartBtn>
        <IoMdAddCircle size="1.2rem" color="#6B23E0" />
      </S.CardCartBtn>
      <S.CardMainTitle>{product.job}</S.CardMainTitle>
      <S.CardAmountText>{`${product.amount} 원`}</S.CardAmountText>
      <S.CardInfoText>{product.interestRate}</S.CardInfoText>
    </S.CardContainer>
  );
}

export default Card;
