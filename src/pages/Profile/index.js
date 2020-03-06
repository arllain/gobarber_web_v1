import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="your email" />
        <hr />
        <Input
          name="password"
          type="oldpassword"
          placeholder="your actual password"
        />
        <Input name="password" type="password" placeholder="new password" />
        <Input
          name="password"
          type="confirmpassword"
          placeholder="confirm new password"
        />
        <button type="submit">Update profile</button>
      </Form>
      <button type="button">Log out</button>
    </Container>
  );
}
