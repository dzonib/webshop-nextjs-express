import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --btnBackground: #5f9ea0;
        --transition: all 0.2s;
    }

    html {
        box-sizing: border-box;
        font-size: 10px;

        
        .slick-dots,.slick-next,.slick-prev {
            height: 0;
            width: 0;
            position: relative;
        }

    }
    body {
        font-family: 'Lora', serif;
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        line-height: 2;
                
        a {
            text-decoration: none;
        }

    }
`

export default GlobalStyle