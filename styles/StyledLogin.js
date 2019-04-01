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
        text-transform: capitalize;
        display: block;
        font-size: 2.2rem;
        font-style: italic;
        padding-left: 10px;
        margin-top: 15px;
    }
    input {
        outline: none;
        border-bottom: 1px solid #d6d4d4;
        width: 500px;
        height: 2rem;
        font-size: 1.6rem;
        background: #f1f1f1;
        &:focus {
            background: #fff;
        }

        @media(max-width: 600px) {
            width: 200px;
            margin-bottom: 5px;
        }
        outline-color: pink;
    }


`
