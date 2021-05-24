import { createGlobalStyle } from "styled-components";
import { fontTypes } from "./constants";

const StyleGlobal = createGlobalStyle`

    body{
        font-family: ${fontTypes.primaryFont};
        color: ${({ theme }) => theme.palette.primary.font};
        margin: 0;
        padding: 0;
        position: relative;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.palette.common.background};
    }

    *{
        box-sizing: border-box;
        font-size: 10px;
        margin: 0;
        padding: 0;
    }
`;

export default StyleGlobal;
