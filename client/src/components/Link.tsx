import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Link } from '../types';

interface props {
  style?: React.CSSProperties,
  link: Link
};

const LinkItem : React.FC<PropsWithChildren<props>> = ({ link }) => {

  return (
    <Wrapper data-css='Link'>
      <p>url: {link.url}</p>
      <p>description: {link.description}</p>
    </Wrapper>
  )
}

export default LinkItem;

const Wrapper = styled.div`

`;    