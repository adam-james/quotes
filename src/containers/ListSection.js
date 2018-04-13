import React from 'react'
import PropTypes from 'prop-types'
import { SectionTitle } from '../components/Layout'
import { List, ListItem } from '../components/List'

const ListSection = ({ items, children: render, title }) => (
  <section>
    <SectionTitle>{title}</SectionTitle>
    <List>
      {items.map((item, index) => (
        <ListItem key={item.id || index}>
          {render(item)}
        </ListItem>
      ))}
    </List>
  </section>
)

ListSection.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default ListSection
