import { Link, useParams } from 'react-router-dom';
import { fetchCategories } from '../api';

const CategoryNav = () => {
  const categories = fetchCategories();
  const { category } = useParams();

  return (
    <nav className="category-nav">
      <ul className="category-list">
        {categories.map((cat) => (
          <li key={cat} className="category-item">
            <Link
              to={`/category/${cat}`}
              className={`category-link ${category === cat ? 'active' : ''}`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;