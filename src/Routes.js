import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthorListPage from './pages/AuthorListPage'
import QuoteListPage from './pages/QuoteListPage'

export default function Routes () {
  return (
    <Router>
      <div>
        <Route path="/authors" component={AuthorListPage} />
        <Route path="/quotes" component={QuoteListPage} />        
      </div>
    </Router>
  )
}
