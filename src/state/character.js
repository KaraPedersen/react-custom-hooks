import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/rickAndMortyApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters);
  }, []);

  return characters;
};
