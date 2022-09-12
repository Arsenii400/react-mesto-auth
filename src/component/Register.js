import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./Header";
import * as Auth from '../utils/Auth';

const Register = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    Auth.register(password, email)
      .then((res) => {
        if (res) {
          history.push('/sign-in')
          props.onRegisterSuccessPopup();
        } else {
          props.onRegisterDeniedPopup();
          console.log('Некорректно заполнено одно из полей');
        }
      })
  }

  return (
    <>
      <Header />
      <div className="login">
        <h1 className="login__header">Регистрация</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="login__input login__input_type_email" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="login__input login__input_type_password" placeholder="Пароль" />
          <button type="submit" className="login__button login__button_type_enter">Зарегистрироваться</button>
        </form>
        <div className="login__questionContainer">
          <h2 className="login__regQuestion">Уже зарегистрированы?</h2>
          <Link to='/sign-in' className="login__link">Войти</Link>
        </div>
      </div>
    </>
  );
}

export default Register;
