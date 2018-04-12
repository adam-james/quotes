import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import QuoteList, { Author, Body, Quote } from './QuoteList'
import { SectionTitle } from '../components/Layout'

describe('Quote', () => {
  const props = {
    children: 'In order to attain the impossible, one must attempt the absurd.',
    authorName: 'Cervantes',
    authorId: 1615
  }

  it('renders children inside `blockquote`', () => {
    const wrapper = shallow(<Quote {...props} />)
    const blockquote = wrapper.find(Body)
    expect(blockquote.props().children).toEqual(props.children)
  })

  it('renders author name inside Link', () => {
    const wrapper = shallow(<Quote {...props} />)
    const link = wrapper.find(Link)
    expect(link.props().children).toEqual(props.authorName)
  })

  it('links to the author', () => {
    const wrapper = shallow(<Quote {...props} />)
    const link = wrapper.find(Link)
    expect(link.props().to).toEqual(`/authors/${props.authorId}`)
  })
})

describe('QuoteList', () => {
  const quote0 = {
    id: 1,
    body: 'In order to attain the impossible, one must attempt the absurd.',
    author: {
      name: 'Cervantes',
      id: 1615
    }
  }
  const quote1 = {
    id: 2,
    body: 'Without haste, but without rest.',
    author: {
      name: 'Goethe',
      id: 1829
    }
  }
  const props = {
    title: 'Recently Added Quotes',
    quotes: [ quote0, quote1 ]
  }

  it('renders title', () => {
    const wrapper = shallow(<QuoteList {...props} />)
    const title = wrapper.find(SectionTitle)
    expect(title.props().children).toEqual(props.title)
  })

  it('renders Quotes', () => {
    const wrapper = shallow(<QuoteList {...props} />)
    const quotes = wrapper.find(Quote)
    expect(quotes.length).toEqual(2)
    expect(quotes.at(0).props()).toEqual({
      authorName: quote0.author.name,
      authorId: quote0.author.id,
      children: quote0.body
    })
    expect(quotes.at(1).props()).toEqual({
      authorName: quote1.author.name,
      authorId: quote1.author.id,
      children: quote1.body
    })
  })
})
