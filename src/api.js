import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY || 'your_api_key_here';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general', searchQuery = '') => {
  try {
    const params = {
      apiKey: API_KEY,
      language: 'en',
      pageSize: 20,
    };

    if (searchQuery) {
      params.q = searchQuery;
    } else {
      params.category = category;
      params.country = 'us';
    }

    const response = await axios.get(`${BASE_URL}/top-headlines`, { params });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const fetchCategories = () => {
  return [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ];
};