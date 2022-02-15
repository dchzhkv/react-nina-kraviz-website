import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Contacts = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query ContactsQuery {
      allContactsJson {
        edges {
          node {
            id
            title
            link
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
          <a key={item.node.id} href={item.node.link}>
            {item.node.title}
          </a>
        ))}
      </div>
      <div>
        Concerts: <span>Ninakravizconcert@gmail.com</span>
      </div>
    </section>
  );
};

export default Contacts;
