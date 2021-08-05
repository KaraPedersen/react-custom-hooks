export const fetchCharacters = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch('https://rickandmortyapi.com/api/character');

  const json = await res.json();
  const data = json.data;

  return data;
};

export const fetchCharacter = async (id) => {
  console.log('api', id);
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();
  console.log('api', json);

  return json;
};

