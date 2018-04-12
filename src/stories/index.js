import React from 'react';
import { storiesOf } from '@storybook/react';

import { Header, Title } from '../components/header'

storiesOf('Header', module)
  .add('Header with Title', () => (
    <Header>
      <Title>Some Quotes</Title>
    </Header>
  ))
