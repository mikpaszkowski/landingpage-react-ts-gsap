import { createGlobalStyle } from "styled-components";
import { fontTypes, colors } from "./styleConstants";


const StyleGlobal = createGlobalStyle`

    body{
        font-family: ${fontTypes.primaryFont};
        color: ${colors.primaryFont};
        margin: 0;
        padding: 0;
        position: relative;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colors.background};
    }

    *{
        box-sizing: border-box;
        font-size: 10px;
        margin: 0;
        padding: 0;
    }
`;

export default StyleGlobal;