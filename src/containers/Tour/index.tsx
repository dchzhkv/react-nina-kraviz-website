import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TourItem } from './components/';

const Tour = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query TourQuery {
      allTourJson {
        edges {
          node {
            date
            dayOfTheWeek
            place
            city
            country
            id
          }
        }
      }
    }
  `);

  return (
    <section className="container">
      <h2 className="title">Techno 2021 tour</h2>
      <ul>
        {data.allTourJson.edges.map((item) => (
          <TourItem key={item.node.id} items={item.node} />
        ))}
      </ul>
    </section>
  );
};

export default Tour;
