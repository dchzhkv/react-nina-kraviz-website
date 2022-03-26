import React from 'react';

interface Props {
  url: string;
  alt: string;
  opacity: number;
  parallaxPos: any;
  rotationPos: number;
  scale: number;
}

const Image = (props: Props): JSX.Element => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      style={{
        opacity: props.opacity,
        transform: `translate3d(${props.parallaxPos.x}px, ${props.parallaxPos.y}px, 0px) rotate(${props.rotationPos}deg) scale(${props.scale})`,
      }}
    />
  );
};

export default Image;
