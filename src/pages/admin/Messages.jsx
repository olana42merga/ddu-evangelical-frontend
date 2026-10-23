import React, { useEffect, useState } from 'react';
import { Container, Card, Table, Button, Form, Modal, Alert, Badge } from 'react-bootstrap';
import Header from '../../components/Header';

const API = 'http://localhost:8080/api';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [showReply, setShowReply] = useState(false);
  const [selected, setSelected] = useState(null);
  const [reply, setReply] = useState('');
  const [msg, setMsg] = useState('');

  const load = () => {
    fetch(API + '/messages').then(r => r.json()).then(d => setMessages(Array.isArray(d) ? d : [])).catch(() => {});
  };
  useEffect(() => { load(); }, []);

  const openReply = (m) => {
    setSelected(m);
    setReply(m.reply || '');
    setShowReply(true);
  };

  const handleReply = async (e) => {
    e.preventDefault();
    await fetch(API + '/messages/' + selected.id + '/reply', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    });
    setMsg('? Reply sent!');
    setShowReply(false);
    load();
    setTimeout(() => setMsg(''), 3000);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete?')) {
      await fetch(API + '/messages/' + id, { method: 'DELETE' });
      load();
    }
  };

  return (
    <>
      <Header />
      <Container fluid className="p-4">
        <h2 className="text-primary mb-4">Messages Management</h2>

        {msg && <Alert variant="success">{msg}</Alert>}

        <Card className="card-shadow border-0">
          <Card.Body>
            <h5>All Messages ({messages.length})</h5>
            <Table striped hover className="mt-3">
              <thead>
                <tr><th>ID</th><th>User</th><th>Subject</th><th>Message</th><th>Reply</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {messages.map(m => (
                  <tr key={m.id}>
                    <td>{m.id}</td>
                    <td>{m.userId}</td>
                    <td><strong>{m.subject}</strong></td>
                    <td>{m.message}</td>
                    <td className="text-muted small">{m.reply || '-'}</td>
                    <td>
                      <Badge bg={m.status === 'REPLIED' ? 'success' : 'warning'}>
                        {m.status}
                      </Badge>
                    </td>
                    <td>
                      <Button size="sm" variant="primary" className="me-2" onClick={() => openReply(m)}>
                        Reply
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(m.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                {messages.length === 0 && (
                  <tr><td colSpan="7" className="text-center text-muted">No messages yet</td></tr>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        <Modal show={showReply} onHide={() => setShowReply(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Reply to Message #{selected?.id}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleReply}>
            <Modal.Body>
              <p><strong>From User:</strong> {selected?.userId}</p>
              <p><strong>Subject:</strong> {selected?.subject}</p>
              <p><strong>Message:</strong></p>
              <p className="text-muted">{selected?.message}</p>
              <Form.Group>
                <Form.Label>Your Reply</Form.Label>
                <Form.Control as="textarea" rows={4} value={reply}
                  onChange={e => setReply(e.target.value)} required />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowReply(false)}>Cancel</Button>
              <Button variant="primary" type="submit">Send Reply</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </>
  );
}
