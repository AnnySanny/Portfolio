import React from 'react';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Номер</LinkTitle>
    <LinkItem href="tel:+380994948394">+380994948394</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>Емайл</LinkTitle>
    <LinkItem href="mailto:vip.marian.m@gmail.com">vip.marian.m@gmail.com</LinkItem>
    </LinkColumn>
    </LinkList>
  </FooterWrapper>
  );
};

export default Footer;
