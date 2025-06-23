import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const NewsCard = ({ article }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="news-card" onClick={handleShow}>
        <div className="news-card-image">
          {article.urlToImage ? (
            <img src={article.urlToImage} alt={article.title} />
          ) : (
            <div className="image-placeholder">No Image</div>
          )}
        </div>
        <div className="news-card-content">
          <h3 className="news-card-title">{article.title}</h3>
          <p className="news-card-description">{article.description}</p>
          <div className="news-card-meta">
            <span className="news-card-source">{article.source?.name}</span>
            <span className="news-card-date">
              {article.publishedAt && formatDate(article.publishedAt)}
            </span>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{article.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-article">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="modal-article-image"
              />
            )}
            <div className="modal-article-meta">
              <span>{article.source?.name}</span>
              <span>
                {article.publishedAt && formatDate(article.publishedAt)}
              </span>
            </div>
            <p className="modal-article-content">
              {article.content || article.description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Full Article
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewsCard;