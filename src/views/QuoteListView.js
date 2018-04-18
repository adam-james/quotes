import React from 'react'
import { Main, SectionTitle } from '../components/Layout'
import QuoteList from '../containers/QuoteList'

const QuoteListView = () => (
  <Main>
    <section>
      <SectionTitle>Recently Added Quotes</SectionTitle>
      <QuoteList />
    </section>
  </Main>
)

export default QuoteListView
