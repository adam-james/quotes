import React from 'react'
import { Main } from '../components/Layout'
import { SectionTitle } from '../components/Layout'
import QuoteList from '../containers/QuoteList'

const QuoteListPage = () => (
  <Main>
    <section>
      <SectionTitle>Recently Added Quotes</SectionTitle>
      <QuoteList />
    </section>
  </Main>
)

export default QuoteListPage
