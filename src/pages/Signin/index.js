import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function Signin() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your passwaord" />
        <button type="submit">Sign in</button>
        <Link to="/register">Create new account</Link>
      </form>
    </>
  );
}
