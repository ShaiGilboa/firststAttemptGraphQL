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
      <p>name: {link.postedBy ? link.postedBy.name : 'anonymous'} </p>
    </Wrapper>
  )
}

export default LinkItem;

const Wrapper = styled.div`
  border: 1px solid red;
  margin: 3px;
`;    