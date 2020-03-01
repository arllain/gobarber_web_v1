import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input placeholder="Full name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your passwaord" />
        <button type="submit">Create accout</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
