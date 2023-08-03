import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: inherit;
        letter-spacing: -1px;
        font-family: 'Pretendard';
    }

    img{
        vertical-align: middle;
    }
`;

export default GlobalStyle;
