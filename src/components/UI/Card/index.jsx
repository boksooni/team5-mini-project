import * as S from "./style";
import { IoMdAddCircle } from "react-icons/io";

function Card({ product }) {
  const amount = product.amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const repayPeriod = product.repayPeriod
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <S.CardContainer>
      <S.CardCartBtn>
        <IoMdAddCircle size="1.2rem" color="#6B23E0" />
      </S.CardCartBtn>
      <S.CardAgencyText>{product.agency}</S.CardAgencyText>

      <S.CardMainWrapper>
        <S.CardMainTitle>{product.name}</S.CardMainTitle>
        <S.CardAmountText>{`${amount} 원`}</S.CardAmountText>
        <S.CardInfoWrapper>
          <S.CardInfoText>{`연 ${product.interestRate}%`}</S.CardInfoText>
          <S.CardInfoText>{`상환기간 ${repayPeriod}일`}</S.CardInfoText>
        </S.CardInfoWrapper>
      </S.CardMainWrapper>
    </S.CardContainer>
  );
}

export default Card;
