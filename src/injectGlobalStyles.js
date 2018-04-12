import { injectGlobal } from 'styled-components'

const injectGlobalStyles = () => {
  injectGlobal`
    * {
      margin: 0;
      padding: 0;
    }
  `
}

export default injectGlobalStyles
