/* globals describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import rendersQuery, { HeadsUp } from './rendersQuery'

describe('rendersQuery', () => {
  it('renders loading message', () => {
    const renderFunction = jest.fn()
    const props = { loading: true }
    const Render = rendersQuery(renderFunction)
    const wrapper = shallow(<Render {...props} />)
    const headsUp = wrapper.find(HeadsUp)
    expect(headsUp.props()).toEqual({
      children: 'Loading...',
      loading: true
    })
    expect(renderFunction).not.toBeCalled()
  })

  it('renders error message', () => {
    const renderFunction = jest.fn()
    const props = { error: true }
    const Render = rendersQuery(renderFunction)
    const wrapper = shallow(<Render {...props} />)
    const headsUp = wrapper.find(HeadsUp)
    expect(headsUp.props()).toEqual({
      children: 'An error occurred.',
      error: true
    })
    expect(renderFunction).not.toBeCalled()
  })

  it('renders error message', () => {
    const renderFunction = jest.fn()
    const props = { data: { a: 1, b: 2 } }
    const Render = rendersQuery(renderFunction)
    const wrapper = shallow(<Render {...props} />)
    expect(renderFunction).toBeCalledWith(props)
  })
})
