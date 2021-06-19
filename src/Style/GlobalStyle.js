import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
h1 {
    font-size: ${props => props.theme.fontSizes.large}
}
h2 {
    font-size: ${props => props.theme.fontSizes.big}
}
`

export default GlobalStyle;