import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthorCreateView from './views/AuthorCreateView'
import AuthorListView from './views/AuthorListView'
import AuthorDetailView from './views/AuthorDetailView'
import AuthorEditView from './views/AuthorEditView'
import QuoteEditView from './views/QuoteEditView'
import QuoteListPage from './pages/QuoteListPage'
import QuoteDeleteView from './views/QuoteDeleteView'
import AuthorQuoteCreateView from './views/AuthorQuoteCreateView'
import App from './App'

export default function Routes () {
  return (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={QuoteListPage} />
        <Route exact path="/authors" component={AuthorListView} />
        <Route exact path="/authors/:id" component={AuthorDetailView} />
        <Route exact path="/authors/:id/edit" component={AuthorEditView} />
        <Route 
          exact path="/authors/:id/add-quote"
          component={AuthorQuoteCreateView}
        />
        <Route path="/add-author" component={AuthorCreateView} />
        <Route exact path="/quotes/:id/edit" component={QuoteEditView} />
        <Route exact path="/quotes/:id/delete" component={QuoteDeleteView} />
      </div>
    </Router>
  )
}
