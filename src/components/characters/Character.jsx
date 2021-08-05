import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Character = ({ name, status, image }) => {
  return (
  //     <Link to={id}>
  //       <h2>{name}</h2>
  //       <img src={image} alt={name} />
  //       <p>{status}</p>
  //     </Link>
  //   );
  // };
    <>
      <figure>
        <img src={image} alt={name} />
        <figcaption>
          <h2>{name}</h2>
          <p>{status}</p>
        </figcaption>
      </figure>
    </>
  );
};

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
