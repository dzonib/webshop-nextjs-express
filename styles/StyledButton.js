import styled from 'styled-components'


export const StyledButton = styled.button`
    width: 190px;
    border: none;
    border-radius: 7px;
    height: 40px;
    font-size: 1.9rem;
    margin: 30px auto;
    font-style: bold;
    display: block;
    background: var(--btnBackground);
    color: white;


    &:focus {
        outline: none;
        border: none;
    }

    &:hover {
        color: #E3D7C3;
        transition: var(--transition);
        transform: ${props => props.loading ? 'none' : 'translateY(-1px)'};
        box-shadow:  ${props => props.loading ? 'none' : '3px 5px 9px -1px rgba(95,158,160,1)'};
    }

    &:active {
        transition: all 0.1s;
        outline: none;
        border: none;
        box-shadow: 1px 3px 4px -1px rgba(95,158,160,1);
    }
`
