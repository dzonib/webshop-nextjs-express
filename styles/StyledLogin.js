import styled from 'styled-components'

export const StyledLogin = styled.div`
    hr {
        margin-bottom: 50px;
    }
    h1 {
        font-style: italic;
        margin-bottom: 0;
    }
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
    justify-content: center;
    label {
        display: block;
        font-size: 2.2rem;
        font-style: italic;
        padding-left: 10px;
    }
    input {
        width: 500px;
        height: 2rem;
        font-size: 1.6rem;
        margin-bottom: 20px;
        @media(max-width: 600px) {
            width: 200px;
            margin-bottom: 5px;
        }
        outline-color: pink;
    }


`
