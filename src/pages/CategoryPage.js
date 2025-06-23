import { useParams, useSearchParams } from 'react-router-dom';
import CategoryNav from '../components/CategoryNav';
import NewsList from '../components/NewsList';
import { useFetchNews } from '../hooks/useFetchNews';

const CategoryPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const { news, loading, error } = useFetchNews(category, searchQuery);

  return (
    <div className="category-page">
      <CategoryNav />
      <div className="container">
        <h2 className="page-title">
          {searchQuery
            ? `Search Results for "${searchQuery}" in ${category}`
            : `${category.charAt(0).toUpperCase() + category.slice(1)} News`}
        </h2>
        <NewsList news={news} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default CategoryPage;