import axios from 'axios';

const getComics = async ({ offset = 0, filterBy, filter }) => {
  const params = filterBy && filter ? { offset, filterBy, filter } : { offset };
  const res = await axios.get('/api/comics/', {
    params,
  });

  return res.data;
};

export default {
  getComics,
};
