import React from "react";
import * as S from "./style"

function GNB() {

  return( <S.GnbContainer>
    <S.EditWrap>
      <p onClick={() => window.open('http://localhost:3000/useredit', '_blank')}>회원정보수정</p>
    </S.EditWrap>
    <S.LogoutWrapper>
      <p>로그아웃</p>
    </S.LogoutWrapper>
  </S.GnbContainer>
  );
}

export default GNB;
