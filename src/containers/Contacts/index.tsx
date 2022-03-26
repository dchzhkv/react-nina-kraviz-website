import React from 'react';
import * as styles from './index.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import ContactsItem from './components/ContactsItem';

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

  return (
    <section className="container">
      <h2 className="title">Contacts</h2>
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
