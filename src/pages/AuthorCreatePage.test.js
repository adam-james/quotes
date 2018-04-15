/* global describe, it, jest, expect */
import React from 'react'
import { shallow } from 'enzyme'
import { Page, updateQuery } from './AuthorCreatePage'
import { ALL_AUTHORS } from '../queries'

describe('Page', () => {
  const testProps = () => ({
    createAuthor: jest.fn(),
    history: { push: jest.fn() }
  })

  it('renders h2', () => {
    const props = testProps()
    const wrapper = shallow(<Page {...props} />)
    const h2 = wrapper.find('h2')
    expect(h2.text()).toEqual('Add Author Here')
  })

  it('handleSubmit', () => {
    const props = testProps()
    const wrapper = shallow(<Page {...props} />)
    const author = ({ firstName: 'Kurt', lastName: 'Vonnegut' })
    wrapper.instance().handleSubmit(author)
    expect(props.createAuthor).toBeCalledWith({ variables: author })
    expect(props.history.push).toBeCalledWith('/authors')
  })
})

describe('updateQuery', () => {
  it('updates cache with new author', () => {
    const authors = [
      { firstName: 'Jane', lastName: 'Austen' },
      { firstName: 'Miguel', lastName: 'Cervantes' }
    ]
    const mutationResult = {
      data: {
        createAuthor: { firstName: 'James', lastName: 'Baldwin' }
      }
    }
    const cache = {
      readQuery: jest.fn(() => ({ authors })),
      writeQuery: jest.fn()
    }
    updateQuery(cache, mutationResult)
    expect(cache.readQuery).toBeCalledWith({ query: ALL_AUTHORS })
    expect(cache.writeQuery).toBeCalledWith({
      query: ALL_AUTHORS,
      data: { authors: [
        authors[0],
        mutationResult.data.createAuthor,
        authors[1]
      ]}
    })
  })
})
