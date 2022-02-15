import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Home } from '../containers';
import '../styles/reset.css';
import '../styles/index.scss';

function Index() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main>
      <title>{data.site.siteMetadata.title}</title>
      <Home />
    </main>
  );
}

export default Index;
