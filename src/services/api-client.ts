import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e75f9f94a55b403b81e2171efff8b5f3',
  },
});
