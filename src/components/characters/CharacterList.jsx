import React from 'react';
import { useCharacters } from '../../state/character';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const characters = useCharacters();
  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Link to={`/${character._id}`}>
        <Character { ...character}></Character>
      </Link>
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

export default CharacterList;
