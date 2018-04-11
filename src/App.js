import React from 'react'
import { Link } from 'react-router-dom'

export default function App ({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

const liStyle = {
  display: 'inline-block',
  margin: '10px 20px'
}

function Header () {
  return (
    <header>
      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li style={liStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={liStyle}>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
