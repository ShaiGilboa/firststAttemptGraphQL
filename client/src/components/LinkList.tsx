import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Link from './Link';

interface props {
  style?: React.CSSProperties,
  
};

const LinkList : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='LinkList'>
      <ol>
        {[{
        id: '1',
        description: 'Prisma turns your database into a GraphQL API 😎',
        url: 'https://www.prismagraphql.com',
      },
      {
        id: '2',
        description: 'The best GraphQL client',
        url: 'https://www.apollographql.com/docs/react/',
      },].map(link => <li><Link link={link}></Link></li>)}
      </ol>
    </Wrapper>
  )
}

export default LinkList;

const Wrapper = styled.div`

`;