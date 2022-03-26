import React, { useReducer, useRef } from 'react';
import * as styles from './index.module.scss';
import { Contact } from '../../../../common/types';
import Title from '../../../../components/Title';
import Image from './Image';

interface Props {
  items: Contact;
}

const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: -20 },
  scale: 0.8,
  rotationPos: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE/OPACITY': {
      return {
        ...state,
        opacity: action.payload,
      };
    }

    case 'MOUSE/COORDINATES': {
      return {
        ...state,
        parallaxPos: action.payload,
      };
    }

    case 'CHANGE/ROTATION': {
      return {
        ...state,
        rotationPos: action.payload,
      };
    }

    case 'CHANGE/SCALE': {
      return {
        ...state,
        scale: action.payload,
      };
    }

    default: {
      throw new Error();
    }
  }
}

const ContactsItem = (props: Props): JSX.Element => {
  const listItem = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const parallax = (event) => {
    const speed = -5;
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 100;

    dispatch({ type: 'MOUSE/COORDINATES', payload: { x, y } });
  };

  const handleScale = (newScale) => {
    dispatch({ type: 'CHANGE/SCALE', payload: newScale });
  };

  const handleRotation = () => {
    const newRotationPos = Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);

    dispatch({ type: 'CHANGE/ROTATION', payload: newRotationPos });
  };

  const handleMouseEnter = () => {
    dispatch({ type: 'CHANGE/OPACITY', payload: 1 });
    handleRotation();
    handleScale(0.8);

    listItem.current.addEventListener('mousemove', parallax);
  };

  const handleMouseLeave = () => {
    handleScale(1);
    dispatch({ type: 'CHANGE/OPACITY', payload: 0 });
    dispatch({ type: 'MOUSE/COORDINATES', payload: initialState.parallaxPos });

    listItem.current.removeEventListener('mousemove', parallax);
  };

  return (
    <li className={styles.item} ref={listItem}>
      <Title title={props.items.title} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      <Image
        url={props.items.img}
        alt={props.items.title}
        opacity={state.opacity}
        parallaxPos={state.parallaxPos}
        scale={state.scale}
        rotationPos={state.rotationPos}
      />
    </li>
  );
};

export default ContactsItem;
