import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const FeedbackForm = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      feedback: '',
      rating: 5,
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={`feedback-form ${darkMode ? 'dark' : 'light'}`}>
      <h3>Share Your Feedback</h3>
      {submitted ? (
        <div className="feedback-success">
          <p>Thank you for your feedback!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating (1-10)</label>
            <input
              type="range"
              id="rating"
              name="rating"
              min="1"
              max="10"
              value={formData.rating}
              onChange={handleChange}
            />
            <span>{formData.rating}</span>
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;