import React from 'react';
import Character from './Character';
import { useCharacters } from '../../state/characters';
import { Link } from 'react-router-dom';
import usePager from '../../state/pager';
import Paging from '../paging/Paging';
const CharacterList = () => {
  const [page, handlePageClick] = usePager();
  const [characters, loading] = useCharacters(page);

  const character = characters.map((character) => {
    return (
      <li key={character.id}>
        <Link to={`/${character.id}`}>
          <Character {...character} />      
        </Link>
      </li>
    );
  });

  if(loading) return <h1>Loading...</h1>;
  return (
    <>  
      <Paging page={page} 
        characterLength={characters.length}
        onClick={handlePageClick}/>
      <ul>{character}</ul>
    </>
  );
  
};

export default CharacterList;
