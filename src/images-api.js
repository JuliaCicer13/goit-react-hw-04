import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const YOUR_ACCESS_KEY = 'FyesNUd9XuqGt5EtDgAuCNnctmFgVVbo05Q1yuAYgh4';

export const fetchImagesWithTopic = async images => {
  const response = await axios.get(`/search/photos`, {
    params: {
     query: images,
     client_id: YOUR_ACCESS_KEY,
     oer_page: 12,
    },
  });
  return response.data.results;
}