import styled from 'styled-components'

export const StyledLogin = styled.div`
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
    justify-content: center;
    label {
        display: block;
        font-size: 2rem;
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
    }


`
