import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthorCreateView from './views/AuthorCreateView'
import AuthorListPage from './pages/AuthorListPage'
import AuthorDetailView from './views/AuthorDetailView'
import AuthorEditView from './views/AuthorEditView'
import QuoteEditView from './views/QuoteEditView'
import QuoteListPage from './pages/QuoteListPage'
import QuoteDeleteView from './views/QuoteDeleteView'
import AuthorQuoteCreatePage from './pages/AuthorQuoteCreatePage'
import App from './App'

export default function Routes () {
  return (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={QuoteListPage} />
        <Route exact path="/authors" component={AuthorListPage} />
        <Route exact path="/authors/:id" component={AuthorDetailView} />
        <Route exact path="/authors/:id/edit" component={AuthorEditView} />
        <Route 
          exact path="/authors/:authorId/add-quote"
          component={AuthorQuoteCreatePage}
        />
        <Route path="/add-author" component={AuthorCreateView} />
        <Route exact path="/quotes/:id/edit" component={QuoteEditView} />
        <Route exact path="/quotes/:id/delete" component={QuoteDeleteView} />
      </div>
    </Router>
  )
}
