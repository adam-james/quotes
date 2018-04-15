/* global describe, it, expect, jest */
import React from 'react'
import { mount } from 'enzyme'
import { Text } from 'react-form'
import QuoteCreateForm from './QuoteCreateForm'

describe('QuoteCreateForm', () => {
  it('render `body` field', () => {
    const props = { onSubmit: () => {} }
    const wrapper = mount(<QuoteCreateForm {...props} />)
    const field = wrapper.find(Text).at(0)
    expect(field.props()).toEqual({
      field: 'body',
      id: 'body'
    })
  })

  it('renders submit', () => {
    const props = { onSubmit: () => {} }
    const wrapper = mount(<QuoteCreateForm {...props} />)
    const button = wrapper.find('button')
    expect(button.props()).toEqual({
      type: 'submit',
      children: 'Submit'
    })
  })

  it('handles submit', done => {
    const props = { onSubmit: jest.fn() }
    const wrapper = mount(<QuoteCreateForm {...props} />)
    const form = wrapper.find('form')
    form.simulate('submit')
    setTimeout(() => {
      expect(props.onSubmit).toBeCalled()
      done()
    })
  })
})
