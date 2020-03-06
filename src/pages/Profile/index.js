import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    console.tron.log(`profile -> ${data}`);
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="your email" />
        <hr />
        <Input
          name="oldpassword"
          type="oldpassword"
          placeholder="your actual password"
        />
        <Input name="newpassword" type="password" placeholder="new password" />
        <Input
          name="confirmpassword"
          type="confirmpassword"
          placeholder="confirm new password"
        />
        <button type="submit">Update profile</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Log out
      </button>
    </Container>
  );
}
