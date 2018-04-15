/* globals describe, it, expect, jest */
import React from 'react'
import { mount } from 'enzyme'
import { SectionTitle } from '../components/Layout'
import { List, ListItem } from '../components/List'
import ListSection from './ListSection'

describe('ListSection', () => {
  const testProps = () => ({
    title: 'test title',
    items: ['one', 'two', 'three'],
    children: jest.fn()
  })

  it('renders SectionTitle', () => {
    const props = testProps()
    const wrapper = mount(<ListSection {...props} />)
    const title = wrapper.find(SectionTitle)
    expect(title.text()).toEqual(props.title)
  })

  it('renders List', () => {
    const props = testProps()
    const wrapper = mount(<ListSection {...props} />)
    const list = wrapper.find(List)
    expect(list.exists()).toBe(true)
  })

  it('renders ListItems', () => {
    const props = testProps()
    const wrapper = mount(<ListSection {...props} />)
    const listItems = wrapper.find(ListItem)
    expect(listItems.length).toEqual(3)
  })

  it('calls render function', () => {
    const props = testProps()
    mount(<ListSection {...props} />)
    expect(props.children.mock.calls).toEqual(
      props.items.map(item => [item])
    )
  })
})
