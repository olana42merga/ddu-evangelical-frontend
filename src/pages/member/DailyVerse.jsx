import React, { useEffect, useState } from 'react';
import { Container, Card, Spinner } from 'react-bootstrap';
import { FaBook } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';

const API = 'http://localhost:8080/api';

export default function DailyVerse() {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API + '/verses')
      .then(r => r.json())
      .then(d => {
        if (Array.isArray(d) && d.length > 0) {
          setVerse(d[d.length - 1]);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <Container fluid className="p-4">
        <h2 className="text-primary mb-4">Daily Verse</h2>

        {loading ? (
          <div className="text-center py-5"><Spinner animation="border" /></div>
        ) : verse ? (
          <Card className="card-shadow border-0" style={{ maxWidth: '700px' }}>
            <Card.Body className="p-5 text-center">
              <FaBook size={48} className="text-primary mb-4" />
              <h3 className="text-primary mb-3">{verse.reference}</h3>
              <p className="fst-italic" style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
                "{verse.verseText}"
              </p>
              <p className="text-muted mt-3">? {verse.translation}</p>
            </Card.Body>
          </Card>
        ) : (
          <p className="text-muted">No verse available yet. Check back later.</p>
        )}
      </Container>
    </div>
  );
}
