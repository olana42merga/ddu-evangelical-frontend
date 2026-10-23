import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Modal, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  FaBible, FaHandsHelping, FaUsers, FaArrowRight,
  FaHeart, FaQuoteLeft, FaTelegram
} from 'react-icons/fa';
import '../../styles/hero.css';

const API = 'http://localhost:8080/api';
const BASE = 'http://localhost:8080';

const TELEGRAM_URL = 'https://t.me/+iXVyakK4-3lhYzc0';

const HERO_IMAGES = [
  '/hero-images/1.jpg',
  '/hero-images/2.jpg',
  '/hero-images/3.jpg',
  '/hero-images/4.jpg',
  '/hero-images/5.jpg',
  '/hero-images/6.jpg'
];

/* ---------- Scroll-reveal wrapper ---------- */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [slide, setSlide] = useState(0);

  /* Hero rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prev => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* Data fetching */
  useEffect(() => {
    fetch(API + '/verses')
      .then(r => r.json())
      .then(d => {
        if (Array.isArray(d) && d.length > 0) setVerse(d[d.length - 1]);
      })
      .catch(() => {});

    fetch(API + '/posts')
      .then(r => r.json())
      .then(d => setPosts(Array.isArray(d) ? d : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  /* Hover lift */
  const cardStyle = {
    cursor: 'pointer',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid transparent',
    background: '#ffffff'
  };

  const onCardEnter = (e, color) => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 22px 42px rgba(0,0,0,0.16)';
    e.currentTarget.style.borderColor = color;
  };

  const onCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '';
    e.currentTarget.style.borderColor = 'transparent';
  };

  return (
    <>
      <Header />

      {/* ═══════════════════════════════════════════ */}
      {/* HERO SLIDER (TEXT UPGRADED)                 */}
      {/* ═══════════════════════════════════════════ */}
      <div className="hero-rotating">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className={`hero-slide ${i === slide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-overlay" style={{ background: 'rgba(0, 0, 0, 0.4)' }} />
        <div className="hero-content">
          
          {/* Attractive Text Box Background */}
          <div style={{ 
            background: 'rgba(26, 42, 74, 0.7)', 
            backdropFilter: 'blur(10px)', 
            padding: '40px 20px', 
            borderRadius: '20px',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h1 className="fw-bold mb-4" style={{ fontSize: '3.5rem', letterSpacing: '-1px', lineHeight: '1.2' }}>
              Welcome to <br />
              <span style={{ 
                background: 'linear-gradient(90deg, #3498db, #f39c12)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>
                FOCUS DDU Evangelical Team
              </span>
            </h1>
            
            <div style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#e0e0e0' }}>
              <span style={{ color: '#f39c12', fontWeight: 'bold' }}>“Yesus deebisee,</span> Karichi, 
              dhugaan, jireenyis, ana; anaan yoo ta'e malee, 
              eenyu iyyuu gara abbaa hin dhufu. 
              <span style={{ color: '#f39c12', fontWeight: 'bold' }}> (Yoh 14:6)”</span>
            </div>
          </div>

        </div>
        <div className="hero-dots">
          {HERO_IMAGES.map((_, i) => (
            <div
              key={i}
              className={`hero-dot ${i === slide ? 'active' : ''}`}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* STATS BAR                                   */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-white py-4 border-bottom">
        <Container>
          <Row className="text-center g-4">
            <Col xs={6} md={3}>
              <div className="fw-bold text-primary" style={{ fontSize: '2.2rem' }}>
                2.2K+
              </div>
              <div className="text-muted small text-uppercase fw-bold" style={{ letterSpacing: '1.5px' }}>
                TikTok Followers
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="fw-bold text-success" style={{ fontSize: '2.2rem' }}>
                5+
              </div>
              <div className="text-muted small text-uppercase fw-bold" style={{ letterSpacing: '1.5px' }}>
                Years of Ministry
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="fw-bold text-warning" style={{ fontSize: '2.2rem' }}>
                100+
              </div>
              <div className="text-muted small text-uppercase fw-bold" style={{ letterSpacing: '1.5px' }}>
                Students Reached
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="fw-bold text-danger" style={{ fontSize: '2.2rem' }}>
                Weekly
              </div>
              <div className="text-muted small text-uppercase fw-bold" style={{ letterSpacing: '1.5px' }}>
                Fellowship Meetings
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* LATEST POSTS                                */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-light py-5">
        <Container>
          <Reveal>
            <div className="text-center mb-5">
              <Badge bg="primary" className="mb-2 px-3 py-2 rounded-pill fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                News & Updates
              </Badge>
              <h2 className="fw-bold mb-2" style={{ color: '#2c3e50', fontSize: '2.5rem' }}>
                Latest Posts
              </h2>
              <p className="text-muted fs-5">Reflections and updates from our team</p>
            </div>
          </Reveal>

          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : posts.length === 0 ? (
            <Card className="border-0 shadow-sm p-5 text-center">
              <FaBible size={48} className="text-primary mb-3 mx-auto opacity-50" />
              <h5 className="text-muted fw-bold">No posts yet</h5>
              <p className="text-muted mb-0">Check back soon for updates from the team.</p>
            </Card>
          ) : (
            <Row xs={1} sm={2} md={2} lg={3} className="g-4">
              {posts.slice(0, 6).map((p, idx) => {
                const preview = p.content?.length > 150
                  ? p.content.substring(0, 150) + '...'
                  : p.content;
                return (
                  <Col key={p.id} className="d-flex">
                    <Reveal delay={idx * 80}>
                      <Card
                        className="card-shadow border-0 w-100 d-flex flex-column h-100"
                        style={{ ...cardStyle, minHeight: '380px' }}
                        onMouseEnter={(e) => onCardEnter(e, '#3498db')}
                        onMouseLeave={onCardLeave}
                      >
                        {p.imagePath ? (
                          <div style={{ height: '180px', overflow: 'hidden', flexShrink: 0 }}>
                            <img
                              src={BASE + p.imagePath}
                              alt={p.title}
                              style={{
                                width: '100%', height: '100%', objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            />
                          </div>
                        ) : (
                          <div style={{ height: '180px', background: 'linear-gradient(135deg, #e9ecef, #dee2e6)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaBible size={36} className="text-muted" />
                          </div>
                        )}
                        <Card.Body className="d-flex flex-column p-4">
                          <Card.Title className="fw-bold mb-3" style={{ fontSize: '1.2rem', color: '#2c3e50' }}>
                            {p.title}
                          </Card.Title>
                          <Card.Text className="text-muted flex-grow-1" style={{ whiteSpace: 'pre-wrap', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            {preview}
                          </Card.Text>
                          {p.content?.length > 150 && (
                            <span
                              onClick={() => setSelected(p)}
                              className="text-primary fw-bold d-flex align-items-center mt-3"
                              style={{ cursor: 'pointer', transition: 'gap 0.2s' }}
                            >
                              Read More <FaArrowRight className="ms-2" />
                            </span>
                          )}
                        </Card.Body>
                      </Card>
                    </Reveal>
                  </Col>
                );
              })}
            </Row>
          )}
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* SCRIPTURE BANNER (TEXT UPGRADED)            */}
      {/* ═══════════════════════════════════════════ */}
      <div
        className="py-5 text-white position-relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2a4a 0%, #2c3e70 50%, #3498db 100%)' }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 40%, rgba(52,152,219,0.35), transparent 55%), radial-gradient(circle at 85% 60%, rgba(241,196,15,0.15), transparent 55%)', pointerEvents: 'none' }} />
        <Container className="position-relative text-center" style={{ zIndex: 1 }}>
          <Reveal>
            <FaQuoteLeft size={50} className="text-warning mb-4 opacity-50" />
            <h2 className="fst-italic mb-4 mx-auto fw-bold" style={{ fontSize: '1.8rem', maxWidth: '900px', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              "Egaa dhaqaa, maqaa abbaatii fi ilmaatti, kan Hafuura Qulqulluuttis isaan cuuphuudhaan, <span style={{ color: '#f39c12' }}>saba hundumaa bartoota koo godhaa!</span>"
            </h2>
            <Badge bg="warning" text="dark" className="px-4 py-2 rounded-pill fs-6 fw-bold shadow">
              Matthew 28:19
            </Badge>
          </Reveal>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* WHAT WE DO — 3 CARDS (TEXT UPGRADED)        */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-white py-5">
        <Container>
          <Reveal>
            <div className="text-center mb-5">
              <Badge bg="success" className="mb-2 px-3 py-2 rounded-pill fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                Our Pillars
              </Badge>
              <h2 className="fw-bold mb-2" style={{ color: '#2c3e50', fontSize: '2.5rem' }}>
                What We Do
              </h2>
              <p className="text-muted fs-5">Our mission in action</p>
            </div>
          </Reveal>

          <Row className="g-4">
            {/* BIBLE VERSE CARD */}
            <Col md={4}>
              <Reveal delay={0}>
                <Card
                  className="h-100 text-center border-0 shadow-sm"
                  style={cardStyle}
                  onMouseEnter={(e) => onCardEnter(e, '#3498db')}
                  onMouseLeave={onCardLeave}
                >
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #3498db, #2980b9)', flexShrink: 0 }}>
                      <FaBible size={36} color="white" />
                    </div>
                    <Card.Title className="fw-bold mb-3" style={{ fontSize: '1.4rem', color: '#2c3e50' }}>
                      Bible Verse
                    </Card.Title>
                    {verse ? (
                      <>
                        <Badge bg="primary" className="mx-auto mb-3 px-3 py-2 rounded-pill" style={{ letterSpacing: '1px' }}>
                          {verse.reference}
                        </Badge>
                        <p className="text-muted fst-italic flex-grow-1" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                          "{verse.verseText?.length > 100
                            ? verse.verseText.substring(0, 100) + '...'
                            : verse.verseText}"
                        </p>
                        <small className="text-secondary fw-bold" style={{ letterSpacing: '1px' }}>
                          — {verse.translation}
                        </small>
                      </>
                    ) : (
                      <p className="text-muted flex-grow-1" style={{ lineHeight: '1.7' }}>
                        Daily verse from the Word of God
                      </p>
                    )}
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>

            {/* GIVING CARD */}
            <Col md={4}>
              <Reveal delay={100}>
                <Card
                  as={Link}
                  to="/giving"
                  className="h-100 text-center border-0 shadow-sm text-decoration-none"
                  style={cardStyle}
                  onMouseEnter={(e) => onCardEnter(e, '#27ae60')}
                  onMouseLeave={onCardLeave}
                >
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #27ae60, #16a085)', flexShrink: 0 }}>
                      <FaHandsHelping size={36} color="white" />
                    </div>
                    <Card.Title className="fw-bold mb-3" style={{ fontSize: '1.4rem', color: '#2c3e50' }}>
                      Giving
                    </Card.Title>
                    <p className="text-muted flex-grow-1" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                      Support the ministry through Telebirr & CBE to help us reach more students with the Gospel.
                    </p>
                    <div className="text-success fw-bold d-flex align-items-center justify-content-center mt-3">
                      View accounts <FaArrowRight className="ms-2" />
                    </div>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>

            {/* FELLOWSHIP CARD */}
            <Col md={4}>
              <Reveal delay={200}>
                <Card
                  as={Link}
                  to="/contact"
                  className="h-100 text-center border-0 shadow-sm text-decoration-none"
                  style={cardStyle}
                  onMouseEnter={(e) => onCardEnter(e, '#f39c12')}
                  onMouseLeave={onCardLeave}
                >
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #f39c12, #e67e22)', flexShrink: 0 }}>
                      <FaUsers size={36} color="white" />
                    </div>
                    <Card.Title className="fw-bold mb-3" style={{ fontSize: '1.4rem', color: '#2c3e50' }}>
                      Fellowship
                    </Card.Title>
                    <p className="text-muted flex-grow-1" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                      Growing together in Christ through weekly worship, Bible study, and prayer.
                    </p>
                    <div className="text-warning fw-bold d-flex align-items-center justify-content-center mt-3">
                      Contact us <FaArrowRight className="ms-2" />
                    </div>
                  </Card.Body>
                </Card>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* JOIN US CTA (TEXT UPGRADED)                 */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-light py-5">
        <Container>
          <Reveal>
            <Card
              className="border-0 shadow-lg overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #fffaf0, #ffffff)', borderLeft: '8px solid #f39c12' }}
            >
              <Card.Body className="p-5 text-center">
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #f39c12, #e67e22)', boxShadow: '0 10px 20px rgba(243,156,18,0.3)' }}>
                  <FaHeart size={36} color="white" />
                </div>
                <h2 className="fw-bold mb-3" style={{ color: '#2c3e50', fontSize: '2.2rem' }}>
                  Join Our Fellowship
                </h2>
                <p className="text-muted mb-4 mx-auto fs-5" style={{ maxWidth: '650px', lineHeight: '1.7' }}>
                  Whether you are a new student, a returning member, or simply curious about faith — you are welcome here. <strong>Come as you are.</strong>
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
                  <Button
                    as={Link}
                    to="/contact"
                    size="lg"
                    className="border-0 fw-bold px-4 py-3 rounded-pill shadow"
                    style={{ background: 'linear-gradient(135deg, #f39c12, #e67e22)' }}
                  >
                    Contact Us <FaArrowRight className="ms-2" />
                  </Button>
                  <Button
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    variant="outline-primary"
                    className="fw-bold px-4 py-3 rounded-pill"
                  >
                    <FaTelegram className="me-2" /> Join Telegram
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Reveal>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* MODAL                                       */}
      {/* ═══════════════════════════════════════════ */}
      <Modal show={!!selected} onHide={() => setSelected(null)} size="lg" centered contentClassName="border-0 shadow-lg rounded-4">
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold fs-4" style={{ color: '#2c3e50' }}>{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {selected?.imagePath && (
            <img
              src={BASE + selected.imagePath}
              alt={selected.title}
              className="rounded-3 mb-4 w-100"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          )}
          <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8, fontSize: '1.05rem', color: '#444' }}>
            {selected?.content}
          </p>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <Button variant="secondary" className="rounded-pill px-4 fw-bold" onClick={() => setSelected(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
}