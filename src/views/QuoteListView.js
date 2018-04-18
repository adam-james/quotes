import React from 'react'
import { Main, SectionTitle } from '../components/Layout'
import QuoteList from '../containers/QuoteList'
import { LinkButton } from '../components/Button'

const QuoteListView = () => (
  <Main>
    <LinkButton to='/authors'>
      + Add Quote
    </LinkButton>
    <section>
      <SectionTitle>Recently Added Quotes</SectionTitle>
      <QuoteList />
    </section>
  </Main>
)

export default QuoteListView
