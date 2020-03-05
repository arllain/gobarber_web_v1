import React from 'react';
import { MdNotifications } from 'react-icons/md';
import colors from '~/styles/colors';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color={colors.primary} size={20} />
      </Badge>
      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>you have a new appointment for tomorrow</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>you have a new appointment for tomorrow</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>you have a new appointment for tomorrow</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>you have a new appointment for tomorrow</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>you have a new appointment for tomorrow</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>you have a new appointment for tomorrow</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>you have a new appointment for tomorrow</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
