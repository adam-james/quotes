import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthorListPage from './pages/AuthorListPage'
import AuthorDetailPage from './pages/AuthorDetailPage'
import QuoteListPage from './pages/QuoteListPage'

export default function Routes () {
  return (
    <Router>
      <div>
        <Route exact path="/" component={QuoteListPage} />
        <Route exact path="/authors" component={AuthorListPage} />
        <Route path="/authors/:id" component={AuthorDetailPage} />
      </div>
    </Router>
  )
}
