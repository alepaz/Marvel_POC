import axios from 'axios';

const getCharacters = async ({ offset = 0, filterBy, filter, orderBy }) => {
  const params = filterBy && filter ? { offset, filterBy, filter, orderBy } : { offset, orderBy };
  const res = await axios.get('/api/characters/', {
    params,
  });

  return res.data;
};

const getCharacterById = async (id) => {
  const res = await axios.get(`/api/characters/${id}`);
  return res.data;
};

export default {
  getCharacters,
  getCharacterById
};
