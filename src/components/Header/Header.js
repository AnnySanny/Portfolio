import Link from 'next/link';
import React from 'react';
import { AiFillInstagram,  AiFillMessage, AiFillPhone } from 'react-icons/ai';
import { Container,  Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div2>
      <li>
        <Link href="#projects"> 
        <NavLink>Портфоліо</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech"> 
        <NavLink>Технології</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills"> 
        <NavLink>Навички</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank"  href="https://www.instagram.com/m__marian___m/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank"  href="https://t.me/MaksymovichMM">
        <AiFillMessage size="3rem"/>
      </SocialIcons>
      <SocialIcons   href="tel:+380994948394">
        <AiFillPhone size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
