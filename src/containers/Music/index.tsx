import React, { useState } from 'react';
import * as styles from './index.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import MusicItem from './components/MusicItem';

const Music = (): JSX.Element => {
  const MusicData = useStaticQuery(graphql`
    query MusicQuery {
      allMusicJson {
        edges {
          node {
            id
            title
            year
            img
          }
        }
      }
    }
  `);

  return (
    <section className={`${styles.section} container unselectable`} data-scroll-section>
      <h2 className="title">Music</h2>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        modules={[Pagination]}
      >
        {MusicData.allMusicJson.edges.map((item) => (
          <SwiperSlide key={item.node.id}>
            <MusicItem items={item.node} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Music;
