import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --border-width: 1px;
    --border-radius: 0.5rem;
    --color-error: #c94b4b;
    --color-info: #157efb;
    --color-info-hover: #0f6ddb;
    --color-info-text: #fff;
  }

  body {
    background-color: #161b22;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    outline: none;
  }
`
