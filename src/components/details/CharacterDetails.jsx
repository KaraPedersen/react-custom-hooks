import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../state/character';

const CharacterDetails = () => {
  const { id } = useParams();
  const character = useCharacter(id);

  const name = JSON.stringify(character.name);
  const status = JSON.stringify(character.status);
  const image = JSON.stringify(character.image);

  return (
    <section>
      <h2>{character.name}</h2>
      <p>Status: {status}</p>
      <p>{character.image}</p>
    </section>
  );
};

export default CharacterDetails;
