import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from 'moment'

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
import Quote from '../components/Quote'

injectGlobalStyles()

const quotes = [
  {
    id: 'cjfzk7kbue7tb01614rlnmscm',
    body: 'For most of history, Anonymous was a woman.',
    createdAt: '2018-04-14T15:51:54.000Z',
    author: {
      id: 'cjfyl23mq4w7u0192od7uo8tw',
      firstName: 'Virginia',
      lastName: 'Woolf'
    }
  },
  {
    id: 'cjfzk7ej3e57z0148x67tggnw',
    body: 'One cannot think well, love well, sleep well, if one has not dined well.',
    createdAt: '2018-04-14T15:51:46.000Z',
    author: {
      id: 'cjfyl23mq4w7u0192od7uo8tw',
      firstName: 'Virginia',
      lastName: 'Woolf'
    }
  },
  {
    id: 'cjfyual3o7kuv0185abohy3se',
    body: 'Don\'t put too fine a point to your wit for fear it should get blunted.',
    createdAt: '2018-04-14T03:46:25.000Z',
    author: {
      id: 'cjfyl39bp4zq00121bk1wqr7z',
      firstName: 'Miguel',
      lastName: 'Cervantes'
    }
  }
]

storiesOf('HomePage', module)
  .add('layout', () => (
    <div>
      <Container>
        <PageHeader>
          <PageTitle>Some Quotes</PageTitle>
          <PageNav>
            <PageNavList>
              <PageNavListItem active>
                <a href='#'>Quotes</a>
              </PageNavListItem>
              <PageNavListItem>
                <a href='#'>Authors</a>
              </PageNavListItem>
            </PageNavList>
          </PageNav>
        </PageHeader>
      </Container>
      <Container maxWidth={600}>
        <section>
          <SectionTitle>Recently Added Quotes</SectionTitle>
          <List>
            {quotes.map(quote => (
              <ListItem>
                <Quote {...quote} />
              </ListItem>
            ))}
          </List>
        </section>
      </Container>
    </div>
  ))
