import React from 'react'
import styled from 'styled-components'
import { List, ListItem } from '../components/List'
import Quote from '../containers/Quote'

export const QuoteListDone = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  border: 1px solid #455A64;
  border-radius: 2px;
  padding: 1em;
  text-align: center;
`

export const QuoteListFooter = styled.div`
  margin-bottom: 36px;
`

export const QuoteListList = ({ quotes }) => (
  <List>
    {quotes.map(quote => (
      <ListItem key={quote.id}>
        <Quote {...quote} />
      </ListItem>
    ))}
  </List>
)
