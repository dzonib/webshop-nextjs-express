import Link from 'next/link'

import { StyledHeader } from '../styles/StyledHeader'
import { StyledNav } from '../styles/StyledNav'
import { StyledHamburgerMenu } from '../styles/StyledHamburgerMenu'


export default function Header() {
  return (
    <StyledHeader>
      <img src="/static/images/logo2.png" alt="" style={{
        width: '400px'
      }}/>

      <StyledNav>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/products'>
            <a>Web Shop</a>
          </Link>
        </li>
        <li>
          <Link href='/admin'>
            <a>Admin Products</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </StyledNav>
      {/* <StyledHamburgerMenu /> */}
    </StyledHeader>
  )
}