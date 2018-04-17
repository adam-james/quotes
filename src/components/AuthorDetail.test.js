/* global expect, it, describe */
import React from 'react'
import { shallow } from 'enzyme'
import {
  CardInfo,
  CardTitle
} from '../components/card'
import {
  AuthorCard,
  EditAuthor
} from './AuthorDetail'

describe('AuthorCard', () => {
  const testProps = () => ({
    id: '123',
    firstName: 'Jane',
    lastName: 'Austen',
    numQuotes: 24
  })

  it('renders author name', () => {
    const props = testProps()
    const wrapper = shallow(<AuthorCard {...props} />)
    const title = wrapper.find(CardTitle)
    expect(title.props().children)
      .toEqual(props.firstName + ' ' + props.lastName)
  })

  it('renders number of quotes', () => {
    const props = testProps()
    const wrapper = shallow(<AuthorCard {...props} />)
    const info = wrapper.find(CardInfo)
    expect(info.props().children).toEqual([props.numQuotes, ' quotes'])
  })

  it('renders link to edit author', () => {
    const props = testProps()
    const wrapper = shallow(<AuthorCard {...props} />)
    const link = wrapper.find(EditAuthor)
    expect(link.props().to).toEqual(`/authors/${props.id}/edit`)
  })
})
