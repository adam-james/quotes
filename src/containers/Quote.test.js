/* global describe, it, expect */
import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { fullName } from './helpers'
import {
  QuoteAuthor,
  QuoteBody,
  QuoteDateAdded,
  QuoteMeta
} from '../components/Quote'
import Quote from './Quote'

describe('Quote', () => {
  const testProps = () => ({
    author: {
      id: '123',
      firstName: 'Ernest',
      lastName: 'Hemmingway'
    },
    body: 'There are only three sports: mountain climbing, bull fighting, and motor racing. All the rest are merely games.',
    createdAt: '2018-04-14T03:46:25.000Z'
  })

  it('renders article', () => {
    const props = testProps()
    const wrapper = shallow(<Quote {...props} />)
    const article = wrapper.find('article')
    expect(article.exists()).toBe(true)
  })

  it('renders QuoteBody', () => {
    const props = testProps()
    const wrapper = shallow(<Quote {...props} />)
    const body = wrapper.find(QuoteBody)
    expect(body.props().children).toEqual(['"', props.body, '"']) 
  })

  it('renders QuoteAuthor', () => {
    const props = testProps()
    const wrapper = shallow(<Quote {...props} />)
    const author = wrapper.find(QuoteAuthor)
    expect(author.props()).toEqual({
      to: `/authors/${props.author.id}`,
      children: fullName(props.author)
    })
  })

  it('renders DateAdded', () => {
    const props = testProps()
    const wrapper = shallow(<Quote {...props} />)
    const date = wrapper.find(QuoteDateAdded)
    expect(date.props().children)
      .toEqual(['Added ', moment(props.createdAt).fromNow()])
  })
})
