import React, { useEffect, useRef, useState } from 'react'
import { useUsersContainer, doSingUp, doPost } from '../../store/slices/user-slice';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as S from './style'

function LoginPage() {
  const { dispatch, posts, error } = useUsersContainer()
  const [cookies, setCookie, removeCookie] = useCookies()
  const [userInput, setUserInput] = useState({email:'', password:''})
  let pageName = useRef("login")
  const [errorMessage, setErrorMessage] = useState({errorMessage: ""})
  const navigate = useNavigate()

  useEffect(() => {
    setCookie('access-token', posts?.accessToken, {path:'/'})
  }, [posts])

  useEffect(() => {
    if (cookies["access-token"] === 'undefined' || cookies["access-token"] === undefined) {} else {
      // console.log(토큰 유효성 검사로 처리)
      // navigate('/')
    }
  }, [cookies["access-token"]])
  
  useEffect(() => {
    Boolean(error) && setErrorMessage({errorMessage: error?.errorMessage})
  }, [error?.errorMessage])

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUserInput({...userInput, [name]:value})
  }

  const LogIn = () => {
    const userData = [userInput, pageName.current]
    dispatch(doPost(userData))
  }

  if (errorMessage.errorMessage === "Email format is invalid") {
    setErrorMessage({errorMessage: "이메일을 확인해 주세요"})
  }

  if (errorMessage.errorMessage === "Incorrect password") {
    setErrorMessage({errorMessage: "비밀번호를 확인해 주세요"})
  }

  if (errorMessage.errorMessage === "Cannot find user") {
    setErrorMessage({errorMessage: "가입된 회원이 없습니다."})
  }

  if (errorMessage.errorMessage === "Email and password are required") {
    setErrorMessage({errorMessage: "이메일과 비밀번호가 필요합니다."})
  }

  return (
    <S.Container>
      <S.BackBtn onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft style={{fontSize: "2rem"}} />
      </S.BackBtn>
      <S.H2>로그인</S.H2>
      <S.Input
        placeholder={'아이디'}
        onChange={inputChangeHandler}
        name="email" />
      <S.Input
        placeholder={'비밀번호'}
        onChange={inputChangeHandler}
        name="password"
        type="password" />
      <S.SignUpBtn onClick={LogIn}>로그인</S.SignUpBtn>
      {/* {userInput} */}
      <p>{errorMessage.errorMessage}</p>
    </S.Container>
  )
}

export default LoginPage;
