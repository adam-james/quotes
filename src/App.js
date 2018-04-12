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

const App = ({ children }) => (
  <div>
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
    {children}
  </div>
)

export default App
