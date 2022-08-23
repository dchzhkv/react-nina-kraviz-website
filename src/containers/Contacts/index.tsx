import React, { useEffect, useRef, useState } from 'react';
import * as styles from './index.module.scss';
import gsap from 'gsap';
import SplitText from '../../utils/Split.min';
import { useStaticQuery, graphql } from 'gatsby';
import ContactsItem from './components/ContactsItem';
import useOnScreen from '../../hooks/useOnScreen';

const Contacts = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query ContactsQuery {
      allContactsJson {
        edges {
          node {
            id
            title
            link
            img
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
    <section className="container" data-scroll-section>
      <h2 className={`${reveal ? 'is-reveal' : null} title anim-title`} ref={ref} id="title">
        Contacts
      </h2>
      <div>
        {data.allContactsJson.edges.map((item) => (
          <ContactsItem key={item.node.id} items={item.node} />
        ))}
      </div>
      <div className={styles.mail}>
        Concerts: <span>Ninakravizconcert@gmail.com</span>
      </div>
    </section>
  );
};

export default Contacts;
