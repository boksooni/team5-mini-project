import styled from "styled-components";

export const CardContainer = styled.div`
  ${(props) => props.theme.common.flexCenter}
  position: relative;
  margin: 1rem auto;
  flex-direction: column;
  width: 20rem;
  height: 9rem;
  background-color: #fff;
  /* background: ${({ value }) =>
    value === "직장인"
      ? "linear-gradient(0deg, #2f9ddf 0%, #5bbcfe 100%)"
      : value === "학생"
      ? "linear-gradient(0deg, #9479b2 0%, #d6b0ff 100%);"
      : value === "자영업자"
      ? "linear-gradient(0deg, #8386c6 0%, #b5b9fa 100%)"
      : value === "전체"
      ? "linear-gradient(0deg, #0597cd 0%, #23c7ff 100%);"
      : "#495371"}; */

  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  &:active {
    border: red;
  }
`;

export const CardInfoWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const CardMainTitle = styled.p`
  font-size: ${(props) => props.theme.CardFontSizes.title};
  font-weight: 500;
  margin: 1rem auto;
`;
export const CardSubTitle = styled.p`
  font-size: ${(props) => props.theme.CardFontSizes.subtitle};
  margin: 0.8rem 0.4rem 0.8rem 0.8rem;
`;
export const CardAmountText = styled.p`
  font-size: ${(props) => props.theme.CardFontSizes.paragraph};
  margin: 0;
`;
export const CardInfoText = styled.p`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.8rem;
  margin: 1rem;
`;
export const CardCartBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 1rem;
  &:hover {
    scale: 1.1;
  }
`;
