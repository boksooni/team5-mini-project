import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function GNB(props) {
  const navigate = useNavigate();
  return (
    <S.GnbContainer>
      <S.EditWrap>
        <p
          onClick={() => {
            navigate("/useredit");
            props.toggleGnb();
          }}
        >
          회원정보수정
        </p>
      </S.EditWrap>
      <S.LogoutWrapper>
        <S.LogoutBtn>로그아웃</S.LogoutBtn>
      </S.LogoutWrapper>
    </S.GnbContainer>
  );
}

export default GNB;
