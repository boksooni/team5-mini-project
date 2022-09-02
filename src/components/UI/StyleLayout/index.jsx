import React from 'react'
import * as S from "./style";
import { Outlet } from 'react-router-dom';

function StyleLayout() {
  return (
    <>
      <S.Layout>
        <Outlet/>
      </S.Layout>
    </>
  )
}

export default StyleLayout