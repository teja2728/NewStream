import NewsCard from './NewsCard';

const NewsList = ({ news, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error loading news: {error}</p>
      </div>
    );
  }

  if (!news.length) {
    return (
      <div className="no-news-container">
        <p>No news articles found.</p>
      </div>
    );
  }

  return (
    <div className="news-list">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;