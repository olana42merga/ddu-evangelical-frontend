import React, { useEffect, useState } from 'react';
import { Container, Card, Table, Button, Form, Row, Col, Alert, Modal, Spinner } from 'react-bootstrap';
import { FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';
import Header from '../../components/Header';

const API = 'http://localhost:8080/api';

export default function Members() {
  const [members, setMembers] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selected, setSelected] = useState(null);
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const emptyForm = { email: '', firstName: '', lastName: '', phone: '', role: 'MEMBER' };
  const [form, setForm] = useState(emptyForm);

  const load = () => {
    fetch(API + '/admin/members')
      .then(r => r.json())
      .then(d => setMembers(Array.isArray(d) ? d : []))
      .catch(() => setMembers([]));
  };

  useEffect(() => { load(); }, []);

  // CREATE
  const handleCreate = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true); setErr('');
    try {
      const res = await fetch(API + '/auth/create-member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) { setErr(data.error || 'Failed'); setLoading(false); return; }
      setMsg(`? Created: ${data.username} ? Email sent to ${data.email}`);
      setShowCreate(false);
      setForm(emptyForm);
      load();
      setTimeout(() => setMsg(''), 6000);
    } catch { setErr('Network error'); }
    finally { setLoading(false); }
  };

  // OPEN EDIT
  const openEdit = (member) => {
    setSelected(member);
    setForm({
      email: member.email || '',
      firstName: member.firstName || '',
      lastName: member.lastName || '',
      phone: member.phone || '',
      role: member.role || 'MEMBER'
    });
    setErr('');
    setShowEdit(true);
  };

  // UPDATE
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (loading || !selected) return;
    setLoading(true); setErr('');
    try {
      const res = await fetch(API + '/admin/members/' + selected.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) { setErr(data.error || 'Failed'); setLoading(false); return; }
      setMsg(`? Updated: ${data.username}`);
      setShowEdit(false);
      load();
      setTimeout(() => setMsg(''), 6000);
    } catch { setErr('Network error'); }
    finally { setLoading(false); }
  };

  // OPEN DELETE
  const openDelete = (member) => {
    setSelected(member);
    setErr('');
    setShowDelete(true);
  };

  // DELETE
  const handleDelete = async () => {
    if (loading || !selected) return;
    setLoading(true); setErr('');
    try {
      const res = await fetch(API + '/admin/members/' + selected.id, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) { setErr(data.error || 'Failed'); setLoading(false); return; }
      setMsg(`? Deleted: ${selected.username}`);
      setShowDelete(false);
      load();
      setTimeout(() => setMsg(''), 6000);
    } catch { setErr('Network error'); }
    finally { setLoading(false); }
  };

  return (
    <>
      <Header />
      <Container fluid className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-primary mb-0">Members Management</h2>
          <Button variant="success" onClick={() => { setForm(emptyForm); setErr(''); setShowCreate(true); }}>
            <FaUserPlus className="me-2" /> Create Member
          </Button>
        </div>

        {msg && <Alert variant="success">{msg}</Alert>}

        <Card className="card-shadow border-0">
          <Card.Body>
            <h5>All Members ({members.length})</h5>
            <Table striped hover className="mt-3">
              <thead>
                <tr>
                  <th>ID</th><th>Username</th><th>Email</th><th>Name</th>
                  <th>Phone</th><th>Role</th><th style={{ width: '150px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map(m => (
                  <tr key={m.id}>
                    <td>{m.id}</td>
                    <td><strong>{m.username}</strong></td>
                    <td>{m.email}</td>
                    <td>{m.firstName} {m.lastName}</td>
                    <td>{m.phone}</td>
                    <td>
                      <span className={`badge bg-${m.role === 'ADMIN' ? 'danger' : 'primary'}`}>
                        {m.role}
                      </span>
                    </td>
                    <td>
                      <Button size="sm" variant="outline-primary" className="me-2"
                        onClick={() => openEdit(m)}>
                        <FaEdit />
                      </Button>
                      <Button size="sm" variant="outline-danger"
                        onClick={() => openDelete(m)}
                        disabled={m.username === 'admin'}>
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
                {members.length === 0 && (
                  <tr><td colSpan="7" className="text-center text-muted">No members</td></tr>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* CREATE MODAL */}
        <Modal show={showCreate} onHide={() => setShowCreate(false)} centered backdrop="static">
          <Modal.Header closeButton><Modal.Title>Create Member</Modal.Title></Modal.Header>
          <Form onSubmit={handleCreate}>
            <Modal.Body>
              {err && <Alert variant="danger">{err}</Alert>}
              <Alert variant="info" className="small">
                Auto-generates username &amp; password. Credentials sent to member's email.
              </Alert>
              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required disabled={loading} />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      required disabled={loading} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      required disabled={loading} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  disabled={loading} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select value={form.role}
                  onChange={e => setForm({ ...form, role: e.target.value })}
                  disabled={loading}>
                  <option value="MEMBER">Member</option>
                  <option value="ADMIN">Admin</option>
                </Form.Select>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowCreate(false)} disabled={loading}>Cancel</Button>
              <Button variant="success" type="submit" disabled={loading}>
                {loading ? <><Spinner size="sm" animation="border" /> Creating...</> : 'Create & Send Email'}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

        {/* EDIT MODAL */}
        <Modal show={showEdit} onHide={() => setShowEdit(false)} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Edit Member: {selected?.username}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleUpdate}>
            <Modal.Body>
              {err && <Alert variant="danger">{err}</Alert>}
              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required disabled={loading} />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      disabled={loading} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      disabled={loading} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  disabled={loading} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select value={form.role}
                  onChange={e => setForm({ ...form, role: e.target.value })}
                  disabled={loading || selected?.username === 'admin'}>
                  <option value="MEMBER">Member</option>
                  <option value="ADMIN">Admin</option>
                </Form.Select>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowEdit(false)} disabled={loading}>Cancel</Button>
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? <><Spinner size="sm" animation="border" /> Saving...</> : 'Save Changes'}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

        {/* DELETE CONFIRM MODAL */}
        <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {err && <Alert variant="danger">{err}</Alert>}
            <p>Are you sure you want to delete <strong>{selected?.username}</strong>?</p>
            <p className="text-muted small">Email: {selected?.email}</p>
            <p className="text-danger small">This action cannot be undone.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDelete(false)} disabled={loading}>Cancel</Button>
            <Button variant="danger" onClick={handleDelete} disabled={loading}>
              {loading ? <><Spinner size="sm" animation="border" /> Deleting...</> : 'Yes, Delete'}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}
