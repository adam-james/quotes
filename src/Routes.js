import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthorCreatePage from './pages/AuthorCreatePage'
import AuthorListPage from './pages/AuthorListPage'
import AuthorDetailPage from './pages/AuthorDetailPage'
import QuoteListPage from './pages/QuoteListPage'
import AuthorQuoteCreatePage from './pages/AuthorQuoteCreatePage'
import App from './App'

export default function Routes () {
  return (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={QuoteListPage} />
        <Route exact path="/authors" component={AuthorListPage} />
        <Route
          exact path="/authors/:id"
          component={AuthorDetailPage}
        />
        <Route 
          exact path="/authors/:authorId/add-quote"
          component={AuthorQuoteCreatePage}
        />
        <Route path="/add-author" component={AuthorCreatePage} />
      </div>
    </Router>
  )
}
