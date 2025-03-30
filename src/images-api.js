import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const YOUR_ACCESS_KEY = 'FyesNUd9XuqGt5EtDgAuCNnctmFgVVbo05Q1yuAYgh4';

export const fetchImagesWithTopic = async (query, page = 1) => {
  const response = await axios.get(`/search/photos`, {
    params: {
     query: query,
     page: page,
     client_id: YOUR_ACCESS_KEY,
     per_page: 12,
    },
  });
  return response.data.results;
}