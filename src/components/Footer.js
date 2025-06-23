
const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} NewsStream. All rights reserved.</p>
        <p>
          Powered by{' '}
          <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
            NewsAPI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;