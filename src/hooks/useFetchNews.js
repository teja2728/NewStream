import { useEffect, useState } from 'react';
import { fetchNews } from '../api';

export const useFetchNews = (category, searchQuery) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const articles = await fetchNews(category, searchQuery);
        setNews(articles);
        setError(null);
      } catch (err) {
        setError(err.message);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [category, searchQuery]);

  return { news, loading, error };
};