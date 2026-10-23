import React, { useEffect, useState } from 'react';
import { Card, Form, Button, ListGroup, Alert, Spinner, Badge } from 'react-bootstrap';
import { FaReply, FaPaperPlane } from 'react-icons/fa';
import MemberLayout from '../../components/MemberLayout';
import { getMessages, sendMessage } from '../../api/messages';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const loadMessages = () => {
    getMessages()
      .then(r => {
        const mine = (r.data || []).filter(m => m.userId === user.id);
        mine.sort((a, b) => b.id - a.id);
        setMessages(mine);
      })
      .catch(() => {});
  };

  useEffect(() => { loadMessages(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendMessage({
        userId: user.id,
        subject,
        message: body,
        status: 'UNREAD'
      });
      setMsg('? Message sent!');
      setSubject(''); setBody('');
      loadMessages();
      setTimeout(() => setMsg(''), 3000);
    } catch {
      setMsg('? Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MemberLayout title="Messages">
      {/* SEND FORM */}
      <Card className="card-shadow border-0 mb-4">
        <Card.Body>
          <h5 className="mb-3">Send Message to Admin</h5>
          {msg && <Alert variant={msg.startsWith('?') ? 'success' : 'danger'}>{msg}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Subject" value={subject}
                onChange={e => setSubject(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={4} placeholder="Your message"
                value={body} onChange={e => setBody(e.target.value)} required />
            </Form.Group>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? <Spinner size="sm" animation="border" /> : <><FaPaperPlane className="me-2" /> Send</>}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* HISTORY */}
      <Card className="card-shadow border-0">
        <Card.Body>
          <h5 className="mb-3">Message History ({messages.length})</h5>

          {messages.length === 0 ? (
            <p className="text-muted text-center py-4">No messages yet.</p>
          ) : (
            <ListGroup variant="flush">
              {messages.map(m => {
                const hasReply = m.reply && m.reply.trim() !== '';
                return (
                  <ListGroup.Item key={m.id} className="py-3">
                    {/* HEADER */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong>{m.subject}</strong>
                      <Badge bg={hasReply ? 'success' : 'warning'}>
                        {hasReply ? '? Replied' : '? Pending'}
                      </Badge>
                    </div>

                    {/* USER MESSAGE */}
                    <div className="p-3 rounded mb-2" style={{ background: '#f0f4f8' }}>
                      <small className="text-muted d-block mb-1"><strong>You:</strong></small>
                      <div>{m.message}</div>
                    </div>

                    {/* ADMIN REPLY */}
                    {hasReply ? (
                      <div
                        className="p-3 rounded"
                        style={{ background: '#e7f5ff', borderLeft: '3px solid #0066cc' }}
                      >
                        <small className="text-primary d-block mb-1">
                          <FaReply className="me-1" /> <strong>Admin Reply:</strong>
                        </small>
                        <div>{m.reply}</div>
                      </div>
                    ) : (
                      <small className="text-muted fst-italic">
                        ? Waiting for admin reply...
                      </small>
                    )}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </MemberLayout>
  );
}
