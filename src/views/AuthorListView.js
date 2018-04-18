import React from 'react'
import { Main } from '../components/Layout'
import { LinkButton } from '../components/Button'
import AuthorSearch from '../containers/AuthorSearch'
import { Card, CardTitle } from '../components/card'

const AuthorListView = () => (
  <Main>
    <Card>
      <CardTitle style={{ margin: '0' }}>
        To add a quote, first find or create an author.
      </CardTitle>
    </Card>
    <LinkButton to='add-author'>+ Add Author</LinkButton>
    <AuthorSearch />
  </Main>
)

export default AuthorListView
