import styled from 'styled-components'

export const Container = styled.div`
  ${({ maxWidth = 800 }) => `
    width: 100%;
    max-width: ${maxWidth}px;
    margin: 0 auto;
  `}
`

export const Main = styled.main`
  ${({ maxWidth = 700 }) => `
    width: 90%;
    max-width: ${maxWidth}px;
    margin: 0 auto;
  `}
`

export const SectionTitle = styled.h2`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-top: 1em;
  padding: 1em;
  text-align: center;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
`
