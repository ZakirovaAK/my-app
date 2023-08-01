import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import * as Styled from './login-form.style';

import { useLoginUserMutation, useGetTokenMutation} from "../../services/login";
import logo_black from '../../img/logo-black.png';
import {
    update_token,
    update_userInfo,
  } from "../../store/actions/creators/auth";

const LoginForm = ({inputLogin, inputPassword}) => {
    const [GetToken, {data: getTokenData}] = useGetTokenMutation();
    const [loginUser, {error, status, data}] = useLoginUserMutation();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    const [isUserInfo, setIsUserInfo] = useState(false);
    const [isTocken, setIsTocken] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginUser = () => {
        loginUser({
            login: login,
            password: password,
        });
    };

    useEffect(()=>{
        if (status === "fulfilled") {
            GetToken({
                login: login,
                password: password,
            });
        }
      },[status])
      useEffect(() => {
           if (getTokenData !== undefined) {
              dispatch(update_token(getTokenData?.access, getTokenData?.refresh));
              setIsTocken(true)
           }
        }, [getTokenData]);
        useEffect(() => {
          if (data) {
             dispatch(update_userInfo(data?.id, data?.login, data?.username));
             setIsUserInfo(true)
          }
       }, [data]);
       if (isUserInfo && isTocken) {
          navigate("/main/main")
     }

    return (
        <Styled.LoginForm>
            <Styled.Logo src={logo_black} alt="logo" />
            <Styled.LoginInput placeholder="Логин" type='text' value={inputLogin} onInput={(event) => setLogin(event.target.value)}/>
            <Styled.LoginInput placeholder="Пароль" type='password' value={inputPassword} onInput={(event) => setPassword(event.target.value)}/>
            <Styled.LoginButton onClick={handleLoginUser}>Войти</Styled.LoginButton>
            <Link to="/registration">
                <Styled.RegistrationButton>
                    Зарегистрироваться
                </Styled.RegistrationButton>
            </Link>
        </Styled.LoginForm>
    );
};

export default LoginForm;