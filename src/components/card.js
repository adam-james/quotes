import React from 'react'
import styled from 'styled-components'

export const Card = styled.section`
  background: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
  border-radius: 2px;
  padding: 12px 18px;
  margin: 20px 0;
`

export const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 18px;
  font-family: Lato-Bold;
  font-size: 16px;
  color: #373737;
  letter-spacing: 0.25px;
  text-align: center;
`

export const CardInfo = styled.p`
  margin: 0;
  margin-top: 12px;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #373737;
  letter-spacing: 0.25px;
  text-align: center;
`

const MoreIcon = () => (
  <svg width='7' height='24' xmlns='http://www.w3.org/2000/svg'>
    <g fill='#455A64' fillRule='evenodd'>
      <path d='M4.91 17.455H1.635c-.454 0-.84.159-1.159.477A1.578 1.578 0 0 0 0 19.09v3.273c0 .454.159.841.477 1.159.318.318.705.477 1.16.477h3.272c.455 0 .841-.159 1.16-.477.317-.318.476-.705.476-1.16v-3.272c0-.455-.159-.841-.477-1.16a1.577 1.577 0 0 0-1.159-.476zM1.636 8.727c-.454 0-.84.16-1.159.478A1.578 1.578 0 0 0 0 10.364v3.273c0 .454.159.84.477 1.158.318.319.705.478 1.16.478h3.272c.455 0 .841-.16 1.16-.478.317-.318.476-.704.476-1.158v-3.273c0-.455-.159-.841-.477-1.16a1.577 1.577 0 0 0-1.159-.477H1.636zM4.91 0H1.635C1.182 0 .796.159.477.477A1.578 1.578 0 0 0 0 1.637v3.272c0 .455.159.841.477 1.16.318.317.705.476 1.16.476h3.272c.455 0 .841-.159 1.16-.477.317-.318.476-.704.476-1.159V1.636c0-.454-.158-.84-.477-1.159A1.578 1.578 0 0 0 4.91 0z' />
    </g>
  </svg>
)

export const CardMenu = styled.div`
  float: right;
  position: relative;
  top: -49px;
  right: -4px;
`

export const CardMenuToggle = styled(
  ({ className, onClick }) => (
    <button className={className} onClick={onClick}>
      <MoreIcon />
    </button>
  )
)`
  cursor: pointer;
  display: block;
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
`

export const CardMenuList = styled.ul`
  padding: 0;
  position: absolute;
  top: 0;
  right: 18px;
  list-style: none;
  background-color: #455a64;
  margin: 0;
  border-radius: 3px;
  text-transform: uppercase;
  text-align: center;
  display: none;  

  ${({ open }) => `
    ${open && 'display: block;'}
  `}
`

export const CardMenuItem = styled.li`
  padding: 1.5em 3em;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  border-bottom: 1px solid #fff;
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    display: block;
    width: 100%;
    height: 100%;
  }
`
