/* global describe, it, expect */
import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import App from './App'
import { PageTitle } from './components/PageHeader'

describe('App', () => {
  it('renders page title', () => {
    const wrapper = shallow(<App />)
    const title = wrapper.find(PageTitle)
    expect(title.props().children).toEqual('Some Quotes and Stuff')
  })

  it('renders Links', () => {
    const wrapper = shallow(<App />)
    const links = wrapper.find(Link)
    expect(links.length).toEqual(2)
    expect(links.at(0).props()).toEqual({
      to: '/',
      children: 'Quotes',
      replace: false
    })
    expect(links.at(1).props()).toEqual({
      to: '/authors',
      children: 'Authors',
      replace: false
    })
  })
})
