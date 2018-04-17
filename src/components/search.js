import React from 'react'
import styled from 'styled-components'

const SearchIcon = () => (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.62 13.885l-3.288-3.287a6.564 6.564 0 0 0 1.19-3.825 6.63 6.63 0 0 0-.533-2.621 6.745 6.745 0 0 0-1.438-2.157A6.745 6.745 0 0 0 9.395.557 6.632 6.632 0 0 0 6.773.025 6.63 6.63 0 0 0 4.15.557a6.745 6.745 0 0 0-2.156 1.438A6.746 6.746 0 0 0 .557 4.152a6.63 6.63 0 0 0-.532 2.621c0 .914.177 1.788.532 2.622a6.745 6.745 0 0 0 1.438 2.156A6.747 6.747 0 0 0 4.15 12.99a6.63 6.63 0 0 0 2.622.532c1.406 0 2.68-.396 3.825-1.189l3.287 3.278c.23.243.517.365.863.365.332 0 .62-.122.862-.365.243-.242.365-.53.365-.862 0-.339-.118-.626-.355-.863zM9.807 9.807c-.84.84-1.852 1.26-3.034 1.26-1.182 0-2.193-.42-3.034-1.26-.84-.84-1.26-1.852-1.26-3.034 0-1.182.42-2.193 1.26-3.034.84-.84 1.852-1.26 3.034-1.26 1.182 0 2.193.42 3.034 1.26.84.84 1.26 1.852 1.26 3.034 0 1.182-.42 2.193-1.26 3.034z"
      fill="#000"
      fillRule="evenodd"
      opacity=".5"
    />
  </svg>
)

const SearchInputInput = styled.input`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #373737;
  display: block;
  padding: 0.5em;
  border: none;
  max-width: 800x;
  width: 90%;
  height: 100%;
  margin: 0 auto;
`

export const SearchInput = styled(
  ({ className, ...props }) => (
    <div className={className}>
      <div>
        <SearchIcon />
      </div>
      <SearchInputInput {...props} />
    </div>
  )
)`
  border: 1px solid #979797;
  border-radius: 3px;
  display: flex;

  div {
    width: 7%;
    position: relative;

    ${() => `
      ${SearchIcon} {
        svg {
          position: absolute;
          left: 12px;
          top: 9px;
        }
      }
    `}
  }
`
