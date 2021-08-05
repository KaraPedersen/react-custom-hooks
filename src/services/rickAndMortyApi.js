export const fetchCharacters = async (page) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

  const json = await res.json();
  const data = json.data;

  return data;
};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();

  return json;
};

