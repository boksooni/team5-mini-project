import React from "react";
import {GiWallet, GiShoppingBag} from "react-icons/gi";
import {BsCreditCardFill} from "react-icons/bs";
import * as S from './style';
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate();

  return(
    <S.NavContainer>
    <div>
      <S.NavButton onClick={() => navigate("/curation")}>
        <S.NavIcon><GiWallet size={45}/></S.NavIcon>
        맞춤추천
      </S.NavButton>
    </div>
    <div>
      <S.NavButton onClick={() => navigate("/allproduct")}>
        <S.NavIcon><GiShoppingBag size={45}/></S.NavIcon>
        전체상품
      </S.NavButton>
    </div>
    <div>
      <S.NavButton onClick={() => navigate("/promotion")}>
        <S.NavIcon><BsCreditCardFill size={45}/></S.NavIcon>
        프로모션
      </S.NavButton>
    </div>
   </S.NavContainer>
);
}

export default NavBar;
