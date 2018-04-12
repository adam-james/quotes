import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components'

import injectGlobalStyles from '../injectGlobalStyles'
import { Container, SectionTitle } from '../components/Layout'
import {
  PageHeader,
  PageNav,
  PageNavList,
  PageNavListItem,
  PageTitle
} from '../components/PageHeader'
import { List, ListItem } from '../components/List'

injectGlobalStyles()

storiesOf('HomePage', module)
  .add('layout', () => (
    <div>
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
      <Container maxWidth={600}>
        <section>
          <SectionTitle>Recently Added Quotes</SectionTitle>
          <List>
            <ListItem>
              <article>
                <blockquote>
                  <p>The secret of getting ahead is getting started.</p>
                </blockquote>
                <p>-- Mark Twain</p>
              </article>
            </ListItem>
            <ListItem>
              <article>
                <blockquote>
                  <p>To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.</p>
                </blockquote>
                <p>-- William Shakespeare</p>
              </article>
            </ListItem>
            <ListItem>
              <article>
                <blockquote>
                  <p>Too much sanity may be madness and the maddest of all, to see life as it is and not as it should be.</p>
                </blockquote>
                <p>-- Miguel de Cervantes</p>
              </article>
            </ListItem>
          </List>
        </section>
      </Container>
    </div>
  ))
