import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TourItem } from './components/';

const Tour = (): JSX.Element => {
  const tourData = useStaticQuery(graphql`
    query TourQuery {
      allTourJson {
        edges {
          node {
            id
            date
            dayOfTheWeek
            place
            city
            country
          }
        }
      }
    }
  `);

  return (
    <section>
      <h2 className="title container">Techno 2022 tour</h2>

      <ul>
        {tourData.allTourJson.edges.map((item) => (
          <TourItem key={item.node.id} items={item.node} />
        ))}
      </ul>
      {/* <div className={styles.scrollDownIcon}>
        <span>☟</span>
      </div> */}
    </section>
  );
};

export default Tour;
