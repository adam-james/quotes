import React from 'react'
import { Main } from '../components/Layout'
import { LinkButton } from '../components/Button'
import AuthorSearch from '../containers/AuthorSearch'

const AuthorListView = () => (
  <Main>
    <LinkButton to='add-author'>+ Add Author</LinkButton>
    <AuthorSearch />
  </Main>
)

export default AuthorListView
