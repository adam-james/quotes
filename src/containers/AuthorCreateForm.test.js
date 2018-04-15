/* global jest, describe, it, expect */
import React from 'react'
import { Form, Text } from 'react-form'
import { shallow } from 'enzyme'
import AuthorCreateForm, { render } from './AuthorCreateForm'

describe('AuthorCreateForm', () => {
  it('renders Form', () => {
    const onSubmit = () => {}
    const wrapper = shallow(<AuthorCreateForm onSubmit={onSubmit} />)
    const form = wrapper.find(Form)
    expect(form.props()).toEqual({ onSubmit, children: render })
  })
})

describe('render', () => {
  it('renders form', () => {
    const formApi = { submitForm: jest.fn() }
    const wrapper = shallow(
      <div>
        {render(formApi)}
      </div>
    )
    const form = wrapper.find('form')
    form.simulate('submit')
    expect(formApi.submitForm).toBeCalled()
  })

  it('renders `firstName` field', () => {
    const formApi = { submitForm: jest.fn() }
    const wrapper = shallow(
      <div>
        {render(formApi)}
      </div>
    )
    const field = wrapper.find(Text).at(0)
    expect(field.props()).toEqual({
      field: 'firstName',
      id: 'firstName'
    })
  })

  it('renders `lastName` field', () => {
    const formApi = { submitForm: jest.fn() }
    const wrapper = shallow(
      <div>
        {render(formApi)}
      </div>
    )
    const field = wrapper.find(Text).at(1)
    expect(field.props()).toEqual({
      field: 'lastName',
      id: 'lastName'
    })
  })
})
