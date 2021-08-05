import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} />
    </>
  );
};

Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Character;
