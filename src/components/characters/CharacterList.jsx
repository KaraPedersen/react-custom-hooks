import React from 'react';
import { useCharacters } from '../../state/character.jsx';
import Character from './Character.js';

const CharacterList = () => {
  const characters = useCharacters();
  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

export default CharacterList;
