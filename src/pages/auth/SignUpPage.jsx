import React, { useEffect, useRef, useState } from 'react'
// import { useSignUp, doSingUp } from '../../store/slices/user-slice';
import { useUsersContainer, doSingUp, doPost } from '../../store/slices/user-slice';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import DropDown from '../../components/DropDown'
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as S from './style'

function SignUpPage() {
  const [AgedropdownVisibility, setAgeDropdownVisibility] = React.useState(false);
  const [JobdropdownVisibility, setJobDropdownVisibility] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState({errorMessage: ""})
  // const { dispatch, posts } = useSignUp()
  const { dispatch, posts, error } = useUsersContainer()
  const [cookies, setCookie, removeCookie] = useCookies()
  const navigate = useNavigate()

  console.log(posts)

  const AgeList = [20, 30, 40, 50, 60]
  const JobList = [
    {"STUDENT": "학생"},
    {"EMPLOYEE": "직장인"},
    {"UNIMPLOYED": "무직"},
    {"BUSINESS": "자영업자"}
  ]
  
  useEffect(() => {
    setCookie('access-token', posts?.accessToken, {path:'/'})
  }, [posts])

  useEffect(() => {
    if (cookies["access-token"] === 'undefined') {} else {
      navigate('/login')
    }
  }, [cookies["access-token"]])

  useEffect(() => {
    Boolean(error) && setErrorMessage({errorMessage: error?.errorMessage})
  }, [error?.errorMessage])

  const [userInput, setUserInput] = useState({id:'', password:'', age:'', job:''})
  let pageName = useRef("signup")
  let userAge = useRef('나이')
  let jobName = useRef('직업')

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUserInput({...userInput, [name]:value})
    if (name === "age") {
      userAge.current = value
    }
  }

  const jobChangeHandler = (e) => {
    const { name, value } = e.target
    const { enName } = e.target.dataset
    setUserInput({...userInput, [name]:enName})
    jobName.current = value
  }

  const SingUp = () => {
    const userData = [userInput, pageName.current]
    dispatch(doPost(userData))
  }

  if (errorMessage.errorMessage === "Email and password are required") {
    setErrorMessage({errorMessage: "이메일과 비밀번호가 필요합니다"})
  }

  if (errorMessage.errorMessage === "Email format is invalid") {
    setErrorMessage({errorMessage: "이메일과 비밀번호가 필요합니다"})
  }

  if (errorMessage.errorMessage === "Email already exists") {
    setErrorMessage({errorMessage: "이메일이 이미 존재합니다"})
  }

  return (
    <S.Container>
      <S.BackBtn onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft style={{fontSize: "2rem"}} />
      </S.BackBtn>
      <S.H2>회원가입</S.H2>
      <S.Input
        placeholder={'아이디'}
        onChange={inputChangeHandler}
        name="email" />
      <S.Input
        placeholder={'비밀번호'}
        onChange={inputChangeHandler}
        name="password"
        type="password" />
      <S.Input type={"button"} value={userAge.current} onClick={(e) => setAgeDropdownVisibility(!AgedropdownVisibility)} />
      <DropDown visibility={AgedropdownVisibility}>
          <S.Ul>
              {
                AgeList.map((item, index) => {
                  return (
                    <S.Li key={index}>
                      <S.ListInput
                        type={"button"}
                        onClick={(e) => {
                          inputChangeHandler(e)
                            setAgeDropdownVisibility(!AgedropdownVisibility)
                          }
                        }
                        name={"age"}
                        value={item} />
                    </S.Li>
                  )
                })
              }
          </S.Ul>
      </DropDown>
      <S.Input type={"button"} value={jobName.current} onClick={(e) => setJobDropdownVisibility(!JobdropdownVisibility)} />
      <DropDown visibility={JobdropdownVisibility}>
          <S.Ul>
              {
                JobList.map((item, index) => {
                  return (
                    <S.Li key={index}>
                      <S.ListInput
                        type={"button"}
                        onClick={(e) => {
                          jobChangeHandler(e)
                            setJobDropdownVisibility(!JobdropdownVisibility)
                          }
                        }
                        name={"job"}
                        data-en-name={Object.keys(item)}
                        value={Object.values(item)} />
                    </S.Li>
                  )
                })
              }
          </S.Ul>
      </DropDown>
      <p>{errorMessage.errorMessage}</p>
      <S.SignUpBtn onClick={SingUp}>회원가입</S.SignUpBtn>
    </S.Container>
  )
}

export default SignUpPage;