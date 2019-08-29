import axios from 'axios';

const getStories = async ({ offset = 0, filterBy, filter }) => {
  const params = filterBy && filter ? { offset, filterBy, filter } : { offset };
  const res = await axios.get('/api/stories/', {
    params,
  });

  return res.data;
};

export default {
  getStories,
};
