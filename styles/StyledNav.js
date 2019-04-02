import styled from 'styled-components'

export const StyledNav = styled.ul `
  display: flex;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    list-style-type: none;
    position: relative;
  }

  a {
    font-size: 3rem;
    padding: 20px;
    color: white;
    transition: all 0.2s;
    &:before {
      content: "";
      width: 3px;
      background: white;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-15deg);
      top: 0;
      bottom: 0;
    }
    &:hover {
      color: #E3D7C3;
    }
  }
`
