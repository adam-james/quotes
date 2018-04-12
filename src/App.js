import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './components/Layout'
import {
  PageHeader,
  PageNav,
  PageNavList,
  PageNavListItem,
  PageTitle
} from './components/PageHeader'

/**
 * TODO
 *  - test
 *    - it renders page title
 *    - it renders nav items with correct links
 */

const App = ({ children }) => (
  <Container>
    <PageHeader>
      <PageTitle>
        Some Quotes and Stuff
      </PageTitle>
      <PageNav>
        <PageNavList>
          <PageNavListItem active={window.location.pathname === '/'}>
            <Link to="/">Quotes</Link>
          </PageNavListItem>
          <PageNavListItem active={window.location.pathname === '/authors'}>
            <Link to="/authors">Authors</Link>
          </PageNavListItem>
        </PageNavList>
      </PageNav>
    </PageHeader>
  </Container>
)

export default App
