import React from "react";
import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

const mainColor = theme.palette.purple;

// 메인컬러 버튼
const StyledButton = styled.button`
  border: none;
  border-radius: 1rem;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  margin: 0.2rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  background: ${mainColor};

  // 가로 100% 버튼
  ${(props) =>
    props.fullWidth &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 86px;
      background: ${mainColor};
      border-radius: 10px 10px 0px 0px;
      color: #fff;
      font-size: 1.6rem;
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
