import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import GNB from "../UI/GNB";

function Header() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const hasCartItems = cart.cartItems.length > 0;

  // 햄버거 토글
  const [isOpen, setIsOpen] = useState(false);

  const toggleGnb = (e) => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <nav>
      <S.HeaderContainer>
        <S.HeaderWrap>
          <S.HeaderLogo onClick={() => navigate("/curation")}>
            Logo
          </S.HeaderLogo>
          <S.HeaderUl>
            <S.HeaderLi onClick={() => navigate("/cart")}>
              <S.CartArea>
                <FiShoppingCart className="cart-icon" />
                {hasCartItems > 0 && (
                  <S.CartQuantityIcon>
                    {cart.cartItems.length}
                  </S.CartQuantityIcon>
                )}
              </S.CartArea>
            </S.HeaderLi>

            <S.HeaderLi onClick={() => toggleGnb()}></S.HeaderLi>
            <S.HeaderLi>
              {isOpen ? (
                <AiOutlineClose onClick={() => toggleGnb()} />
              ) : (
                <GiHamburgerMenu onClick={() => toggleGnb()} />
              )}
            </S.HeaderLi>
          </S.HeaderUl>
        </S.HeaderWrap>
      </S.HeaderContainer>
      {/* 햄버거 토글 */}
      {isOpen === true ? <GNB /> : null}
    </nav>
  );
}

export default Header;
