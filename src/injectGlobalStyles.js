import { injectGlobal } from 'styled-components'

const injectGlobalStyles = () => {
  injectGlobal`
    body {
      margin: 0;
      background-color: #F2F2F2;
    }
  `
}

export default injectGlobalStyles
