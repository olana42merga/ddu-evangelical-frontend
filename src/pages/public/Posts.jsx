import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Spinner, Modal, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const API = 'http://localhost:8080/api';
const BASE = 'http://localhost:8080';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(API + '/posts')
      .then(r => r.json())
      .then(d => setPosts(Array.isArray(d) ? d : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <Container className="py-5">
        <h1 className="text-primary mb-4">Posts</h1>
        {loading ? (
          <div className="text-center py-5"><Spinner animation="border" /></div>
        ) : posts.length === 0 ? (
          <p className="text-muted text-center py-5">No posts yet.</p>
        ) : (
          <Row xs={1} sm={2} md={2} lg={3} className="g-4">
            {posts.map(p => {
              const preview = p.content?.length > 150
                ? p.content.substring(0, 150) + '...'
                : p.content;
              return (
                <Col key={p.id} className="d-flex">
                  <Card className="card-shadow border-0 w-100 d-flex flex-column" style={{ minHeight: '380px' }}>
                    {p.imagePath ? (
                      <div style={{ height: '180px', overflow: 'hidden', flexShrink: 0 }}>
                        <img
                          src={BASE + p.imagePath}
                          alt={p.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    ) : (
                      <div style={{ height: '180px', background: '#e9ecef', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="text-muted">No image</span>
                      </div>
                    )}
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="fw-bold">{p.title}</Card.Title>
                      <Card.Text style={{ whiteSpace: 'pre-wrap', flexGrow: 1 }}>
                        {preview}
                      </Card.Text>
                      {p.content?.length > 150 && (
                        <span
                          onClick={() => setSelected(p)}
                          className="text-primary fw-bold"
                          style={{ cursor: 'pointer' }}
                        >
                          Read More ?
                        </span>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>

      <Modal show={!!selected} onHide={() => setSelected(null)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selected?.imagePath && (
            <img
              src={BASE + selected.imagePath}
              alt={selected.title}
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px', borderRadius: '8px' }}
            />
          )}
          <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>{selected?.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelected(null)}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
}
