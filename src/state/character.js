import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharacter } from '../services/rickAndMortyApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters);
  }, []);

  return characters;
};

export const UseCharacter = (id) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharacter(id).then(setCharacter);
  }, []);

  return character;
};
