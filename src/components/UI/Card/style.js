import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  margin: 1rem auto;
  flex-direction: column;
  ${(props) => props.theme.common.flexCenter}
  width: 20rem;
  height: 8rem;
  background: ${({ value }) =>
    value === "직장인"
      ? "linear-gradient(0deg, #2f9ddf 0%, #5bbcfe 100%)"
      : value === "학생"
      ? "linear-gradient(0deg, #9479b2 0%, #d6b0ff 100%);"
      : value === "자영업자"
      ? "linear-gradient(0deg, #8386c6 0%, #b5b9fa 100%)"
      : value === "전체"
      ? "linear-gradient(0deg, #0597cd 0%, #23c7ff 100%);"
      : "#495371"};
  border-radius: 16px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
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
  font-size: 1.3rem;
  margin: 1rem auto;
`;
export const CardSubTitle = styled.p`
  font-size: 1rem;
  margin: 0.8rem 0.4rem 0.8rem 0.8rem;
`;
export const CardAmountText = styled.p`
  font-size: 1rem;
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
    scale: 1.2;
  }
`;
