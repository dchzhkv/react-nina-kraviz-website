import React from 'react';
import * as styles from './index.module.scss';
import Title from '../../../../components/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Music } from '../../../../common/types';

interface Props {
  items: Music;
}

const MusicItem = (props: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <img src={props.items.img} alt={props.items.title} />
      <div className={styles.year}>{props.items.year}</div>
      <Title isAnimHover={false} title={props.items.title} styles={styles.title} />
    </div>
  );
};

export default MusicItem;
