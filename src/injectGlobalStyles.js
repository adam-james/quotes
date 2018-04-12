import { injectGlobal } from 'styled-components'

/**
 * TODO: Fix components. Don't use globals.
 */

const injectGlobalStyles = () => {
  injectGlobal`
    body {
      margin: 0;
    }
  `
}

export default injectGlobalStyles
