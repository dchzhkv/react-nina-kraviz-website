import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TourItem } from './components/';
import gsap from 'gsap';
import SplitText from '../../utils/Split.min';
import useOnScreen from '../../hooks/useOnScreen';

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

  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText('#title', {
        type: 'lines',
        linesClass: 'lineChildren',
      });
      const splitParent = new SplitText('#title', {
        type: 'lines',
        linesClass: 'lineParent',
      });
      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power2',
        }
      );
    }
  }, [reveal]);

  return (
    <section data-scroll-section>
      <h2 className={`${reveal ? 'is-reveal' : null} title container anim-title`} ref={ref} id="title">
        Techno 2022 tour
      </h2>

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
