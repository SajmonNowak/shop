import { createGlobalStyle } from "styled-components";
import Helvetica from "./Fonts/Helvetica.ttf";
import HelveticaNeue from "./Fonts/HelveticaNeue.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Helvetica";
    src: url(${Helvetica}) format ("ttf");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "HelveticaNeue";
    src: url(${HelveticaNeue}) format ("ttf");
    font-weight: normal;
    font-style: normal;
}

h1 {
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family : "Helvetica";
}
h2 {
    font-size: ${(props) => props.theme.fontSizes.big};
    font-family : "Helvetica";
}

body {
    font-family: "HelveticaNeue";
}
`;

export default GlobalStyle;
