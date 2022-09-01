import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import * as S from './style'
import {Link, Router, useNavigate, useLocation} from 'react-router-dom'
import { useState } from "react";
import GNB from "../UI/GNB";
function Header() {
  const test = () => {
    console.log("Asdf")
  }
  const navigate = useNavigate();
  // 햄버거 토글
  const [isOpen, setisOpen ] = useState(false);
  const toggleGnb = (e) => {
    setisOpen(isOpen => !isOpen)
  }
  return (
    <nav>
      <S.HeaderContainer>
      <S.HeaderWrap>
        <S.HeaderLogo onClick={() => navigate("/curation")}>
          Logo</S.HeaderLogo>
        <S.HeaderUl>
          <S.HeaderLi onClick={() => navigate("/cart")}><FiShoppingCart/></S.HeaderLi>
          <S.HeaderLi onClick={() => toggleGnb()}><GiHamburgerMenu/></S.HeaderLi>
        </S.HeaderUl>
      </S.HeaderWrap>
    </S.HeaderContainer>
    {/* 햄버거 토글 */}
    {isOpen === true ? <GNB/> : null}
    </nav>
  );
}
export default Header;
