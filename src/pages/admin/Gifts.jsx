import React, { useEffect, useState } from 'react';
import { Container, Card, Table, Button, Badge, Alert } from 'react-bootstrap';
import Header from '../../components/Header';

const API = 'http://localhost:8080/api';

export default function Gifts() {
  const [gifts, setGifts] = useState([]);
  const [msg, setMsg] = useState('');

  const load = () => {
    fetch(API + '/gifts').then(r => r.json()).then(d => setGifts(Array.isArray(d) ? d : [])).catch(() => {});
  };
  useEffect(() => { load(); }, []);

  const handleVerify = async (id) => {
    await fetch(API + '/gifts/' + id + '/verify', { method: 'PUT' });
    setMsg('? Gift verified');
    load();
    setTimeout(() => setMsg(''), 3000);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete?')) {
      await fetch(API + '/gifts/' + id, { method: 'DELETE' });
      load();
    }
  };

  const total = gifts.reduce((sum, g) => sum + (g.amount || 0), 0);

  return (
    <>
      <Header />
      <Container fluid className="p-4">
        <h2 className="text-primary mb-4">Gifts Management</h2>

        {msg && <Alert variant="success">{msg}</Alert>}

        <Card className="card-shadow border-0 mb-3">
          <Card.Body>
            <h5>Total Gifts: Br {total}</h5>
            <small className="text-muted">Verified: {gifts.filter(g => g.status === 'VERIFIED').length} / {gifts.length}</small>
          </Card.Body>
        </Card>

        <Card className="card-shadow border-0">
          <Card.Body>
            <h5>All Gifts ({gifts.length})</h5>
            <Table striped hover className="mt-3">
              <thead>
                <tr><th>ID</th><th>User</th><th>Amount</th><th>Method</th><th>Transaction</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {gifts.map(g => (
                  <tr key={g.id}>
                    <td>{g.id}</td>
                    <td>{g.userId}</td>
                    <td><strong>Br {g.amount}</strong></td>
                    <td><Badge bg="info">{g.method}</Badge></td>
                    <td>{g.transactionId || '-'}</td>
                    <td>
                      <Badge bg={g.status === 'VERIFIED' ? 'success' : 'warning'}>
                        {g.status}
                      </Badge>
                    </td>
                    <td>
                      {g.status !== 'VERIFIED' && (
                        <Button size="sm" variant="success" className="me-2"
                          onClick={() => handleVerify(g.id)}>
                          Verify
                        </Button>
                      )}
                      <Button size="sm" variant="danger" onClick={() => handleDelete(g.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                {gifts.length === 0 && (
                  <tr><td colSpan="7" className="text-center text-muted">No gifts yet</td></tr>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
