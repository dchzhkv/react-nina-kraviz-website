import React from 'react';
import * as styles from './index.module.scss';
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

      <ul className={`${'content normalScroll'} ${styles.list}`}>
        {tourData.allTourJson.edges.map((item) => (
          <TourItem key={item.node.id} items={item.node} />
        ))}
      </ul>

      <div className={styles.scrollDownIcon}>
        <span>☟</span>
      </div>
    </section>
  );
};

export default Tour;
