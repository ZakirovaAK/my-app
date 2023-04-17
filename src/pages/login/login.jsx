import React from 'react';
import * as Styled from './login.style';
import LoginForm from '../../components/login/login-form';

const LoginPage = () => {
    return (
        <Styled.LoginWrapper>
            <LoginForm />
        </Styled.LoginWrapper>
    );
};

export default LoginPage;