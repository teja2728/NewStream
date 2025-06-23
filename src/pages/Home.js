import { useSearchParams } from 'react-router-dom';
import CategoryNav from '../components/CategoryNav';
import FeedbackForm from '../components/FeedbackForm';
import NewsList from '../components/NewsList';
import { useFetchNews } from '../hooks/useFetchNews';

const Home = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const { news, loading, error } = useFetchNews('general', searchQuery);

  return (
    <div className="home-page">
      <CategoryNav />
      <div className="container">
        <h2 className="page-title">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Top Headlines'}
        </h2>
        <NewsList news={news} loading={loading} error={error} />
      </div>
      <div className="feedback-section">
        <div className="container">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default Home;