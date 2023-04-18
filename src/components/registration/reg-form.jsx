import React from 'react';
import * as Styled from './reg-form.style';
import { Link } from 'react-router-dom';

import logo_black from '../../img/logo-black.png'

const RegistrationForm = () => {
    return (
        <Styled.RegistrationForm>
            <Styled.Logo src={logo_black} alt="logo" />
            <Styled.RegistrationInput placeholder="Логин" />
            <Styled.RegistrationInput placeholder="Пароль" />
            <Styled.RegistrationInput placeholder="Повторите пароль" />
            <Styled.RegistrationButton>
                Зарегистрироваться
            </Styled.RegistrationButton>
        </Styled.RegistrationForm>
    );
};

export default RegistrationForm;