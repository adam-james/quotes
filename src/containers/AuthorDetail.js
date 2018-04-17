import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardInfo,
  CardMenu,
  CardMenuItem,
  CardMenuList,
  CardMenuToggle,
  CardTitle
} from '../components/card'

export class AuthorCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <Card>
        <CardTitle>{ this.props.name }</CardTitle>
        <CardInfo>{ this.props.numQuotes } quotes</CardInfo>
        <CardMenu>
          <CardMenuToggle onClick={this.handleToggle} />
          <CardMenuList open={this.state.open}>
            <CardMenuItem>
              Edit
            </CardMenuItem>
            <CardMenuItem>
              Delete
            </CardMenuItem>
          </CardMenuList>
        </CardMenu>
      </Card>
    )
  }
}

AuthorCard.propTypes = {
  name: PropTypes.string.isRequired,
  numQuotes: PropTypes.number.isRequired
}
