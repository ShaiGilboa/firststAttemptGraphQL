import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LinkItem from './Link';
import { Link } from '../types';

interface props {
  style?: React.CSSProperties,
  
};

const LinkList : React.FC<PropsWithChildren<props>> = () => {
  const QUERY = gql`
  {
    feed {
    links {
      id
      postedBy {
        name
      }
      description
      url
    }
  }
  }
  `
  return (
      <Wrapper data-css='LinkList'>
    <Query query={QUERY}>
      {({ loading, error, data } : any) => {
        // console.log('error', error)
        if (loading) return <div>loading</div>;
        if (error) return <div>Error</div>;
        console.log('data', data)
        const linksToRender : Link[] = data.feed.links;
        return (
          <ul>
            {linksToRender.map((link: Link) => <li key={link.id+link.description}><LinkItem  link={link} /></li>)}
          </ul>
        )
      }}
    </Query>
      </Wrapper>
  )
}

export default LinkList;

const Wrapper = styled.div`

`;