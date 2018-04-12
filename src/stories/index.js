import React from 'react';
import { storiesOf } from '@storybook/react';

import injectGlobalStyles from '../injectGlobalStyles'
import { Container } from '../components/Layout'
import {
  PageHeader,
  PageNav,
  PageNavList,
  PageNavListItem,
  PageTitle
} from '../components/PageHeader'

injectGlobalStyles()

storiesOf('PageHeader', module)
  .add('regular', () => (
    <Container>
      <PageHeader>
        <PageTitle>Some Quotes and Stuff</PageTitle>
        <PageNav>
          <PageNavList>
            <PageNavListItem active>
              <a href="#">Quotes</a>
            </PageNavListItem>
            <PageNavListItem>
              <a href="#">Authors</a>
            </PageNavListItem>
          </PageNavList>
        </PageNav>
      </PageHeader>
    </Container>
  ))
