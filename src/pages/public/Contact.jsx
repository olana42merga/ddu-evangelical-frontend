import React, { useEffect, useRef, useState } from 'react';
import { Container, Card, Row, Col, Button, Badge } from 'react-bootstrap';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaUsers, FaClock,
  FaHandsHelping, FaBible, FaTelegram, FaFacebook, FaYoutube,
  FaInstagram, FaQuoteLeft, FaArrowRight, FaPaperPlane
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TELEGRAM_URL = 'https://t.me/+iXVyakK4-3lhYzc0';
const TIKTOK_URL = 'https://www.tiktok.com/@focus.fellowship';
const FACEBOOK_URL = 'https://www.facebook.com/focusddufellowship';

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
      { threshold: 0.15 }
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

/* ---------- Hover-lift card behavior ---------- */
const hoverLift = {
  base: {
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid transparent',
    cursor: 'default'
  },
  enter: (e, color = '#3498db') => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 22px 40px rgba(0,0,0,0.15)';
    e.currentTarget.style.borderColor = color;
  },
  leave: (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '';
    e.currentTarget.style.borderColor = 'transparent';
  }
};

export default function Contact() {
  return (
    <>
      <Header />

      {/* HERO BANNER */}
      <div
        className="position-relative overflow-hidden text-white"
        style={{
          background:
            'linear-gradient(135deg, #1a2a4a 0%, #2c3e70 45%, #3498db 100%)',
          padding: '90px 0 70px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 25% 30%, rgba(52,152,219,0.35), transparent 55%), radial-gradient(circle at 80% 70%, rgba(241,196,15,0.18), transparent 55%)',
            pointerEvents: 'none'
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center">
            <Badge
              bg="light"
              text="dark"
              className="mb-3 px-3 py-2"
              style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}
            >
              <FaPaperPlane className="me-2" /> Contact & Fellowship
            </Badge>
            <h1 className="display-4 fw-bold mb-3">Come Fellowship With Us</h1>
            <p
              className="lead mb-0 mx-auto"
              style={{ maxWidth: '680px', opacity: 0.9 }}
            >
              We would love to hear from you. Reach out, join our gatherings,
              or simply say hello.
            </p>
          </div>
        </Container>

        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            width: '100%',
            height: '60px',
            display: 'block'
          }}
        >
          <path
            d="M0,40 C360,90 1080,-10 1440,40 L1440,80 L0,80 Z"
            fill="#f8f9fa"
          />
        </svg>
      </div>

      {/* FELLOWSHIP SECTION */}
      <div className="bg-light py-5">
        <Container>
          <Reveal>
            <div className="text-center mb-5">
              <div
                className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '90px',
                  height: '90px',
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  boxShadow: '0 12px 30px rgba(243,156,18,0.35)'
                }}
              >
                <FaUsers size={40} color="white" />
              </div>
              <h2 className="text-dark fw-bold mb-2">Fellowship</h2>
              <p
                className="text-muted fst-italic mb-0"
                style={{ fontSize: '1.1rem' }}
              >
                "Growing together in Christ"
              </p>
            </div>
          </Reveal>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Reveal delay={0}>
                <Card
                  className="h-100 border-0 shadow-sm p-4 text-center"
                  style={hoverLift.base}
                  onMouseEnter={(e) => hoverLift.enter(e, '#3498db')}
                  onMouseLeave={hoverLift.leave}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, #3498db, #2980b9)',
                      flexShrink: 0
                    }}
                  >
                    <FaClock size={30} color="white" />
                  </div>
                  <h5 className="fw-bold">When We Meet</h5>
                  <p className="text-muted mb-1">
                    <strong>Thursday Morning</strong> — 11:00 AM
                  </p>
                  <p className="text-muted mb-0">
                    <strong>Thursday Afternoon</strong> — 6:00 PM
                  </p>
                </Card>
              </Reveal>
            </Col>

            <Col md={6} lg={4}>
              <Reveal delay={100}>
                <Card
                  className="h-100 border-0 shadow-sm p-4 text-center"
                  style={hoverLift.base}
                  onMouseEnter={(e) => hoverLift.enter(e, '#27ae60')}
                  onMouseLeave={hoverLift.leave}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, #27ae60, #16a085)',
                      flexShrink: 0
                    }}
                  >
                    <FaBible size={30} color="white" />
                  </div>
                  <h5 className="fw-bold">What We Do</h5>
                  <p className="text-muted mb-1">Bible Study</p>
                  <p className="text-muted mb-0">Prayer • Worship • Sharing</p>
                </Card>
              </Reveal>
            </Col>

            <Col md={12} lg={4}>
              <Reveal delay={200}>
                <Card
                  className="h-100 border-0 shadow-sm p-4 text-center"
                  style={{
                    ...hoverLift.base,
                    background: 'linear-gradient(135deg, #fffaf0, #fff)'
                  }}
                  onMouseEnter={(e) => hoverLift.enter(e, '#f39c12')}
                  onMouseLeave={hoverLift.leave}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                      flexShrink: 0
                    }}
                  >
                    <FaHandsHelping size={30} color="white" />
                  </div>
                  <h5 className="fw-bold">Everyone Is Welcome</h5>
                  <p className="text-muted mb-0">
                    New student, returning member, or just curious about faith
                    — come as you are.
                  </p>
                </Card>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CONTACT INFO CARDS */}
      <div className="bg-white py-5">
        <Container>
          <Reveal>
            <div className="text-center mb-5">
              <h2 className="text-primary fw-bold mb-2">Get in Touch</h2>
              <p className="text-muted">Find us, write to us, or call us</p>
            </div>
          </Reveal>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <Reveal delay={0}>
                <Card
                  className="h-100 text-center border-0 shadow-sm p-4"
                  style={hoverLift.base}
                  onMouseEnter={(e) => hoverLift.enter(e, '#e74c3c')}
                  onMouseLeave={hoverLift.leave}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                      flexShrink: 0
                    }}
                  >
                    <FaMapMarkerAlt size={30} color="white" />
                  </div>
                  <h5 className="fw-bold">Location</h5>
                  <p className="text-muted mb-0">Dire Dawa University</p>
                  <p className="text-muted mb-0">Main Campus</p>
                </Card>
              </Reveal>
            </Col>

            <Col md={6} lg={3}>
              <Reveal delay={100}>
                <Card
                  className="h-100 text-center border-0 shadow-sm p-4"
                  style={hoverLift.base}
                  onMouseEnter={(e) => hoverLift.enter(e, '#3498db')}
                  onMouseLeave={hoverLift.leave}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, #3498db, #2980b9)',
                      flexShrink: 0
                    }}
                  >
                    <FaEnvelope size={30} color="white" />
                  </div>
                  <h5 className="fw-bold">Email</h5>
                  <a
                    href="mailto:info@ddu-evangelical.com"
                    className="text-muted d-block text-decoration-none"
                  >
                    info@ddu-evangelical.com
                  </a>
                  <a
                    href="mailto:obayecha@gmail.com"
                    className="text-muted d-block text-decoration-none"
                  >
                    obayecha@gmail.com
                  </a>
                </Card>
              </Reveal>
            </Col>

            <Col md={6} lg={3}>
              <Reveal delay={200}>
                <Card
                  className="h-100 text-center border-0 shadow-sm p-4"
                  style={hoverLift.base}
                  onMouseEnter={(e) => hoverLift.enter(e, '#27ae60')}
                  onMouseLeave={hoverLift.leave}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: 'linear-gradient(135deg, #27ae60, #16a085)',
                      flexShrink: 0
                    }}
                  >
                    <FaPhone size={30} color="white" />
                  </div>
                  <h5 className="fw-bold">Phone</h5>
                  <a
                    href="tel:+251912345678"
                    className="text-muted d-block text-decoration-none"
                  >
                    +251 912 345 678
                  </a>
                  <a
                    href="tel:+251912345679"
                    className="text-muted d-block text-decoration-none"
                  >
                    +251 912 345 679
                  </a>
                </Card>
              </Reveal>
            </Col>

            <Col md={6} lg={3}>
              <Reveal delay={300}>
                <Card
                  className="h-100 text-center border-0 shadow-sm p-4 position-relative overflow-hidden"
                  style={{
                    ...hoverLift.base,
                    background: 'linear-gradient(135deg, #fafafa, #ffffff)'
                  }}
                  onMouseEnter={(e) => hoverLift.enter(e, '#FE2C55')}
                  onMouseLeave={hoverLift.leave}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      background:
                        'linear-gradient(135deg, #000000 0%, #25F4EE 55%, #FE2C55 100%)',
                      flexShrink: 0,
                      boxShadow: '0 8px 22px rgba(254,44,85,0.30)'
                    }}
                  >
                    <FaTiktok size={30} color="white" />
                  </div>
                  <h5 className="fw-bold">TikTok</h5>
                  <p className="text-muted small mb-2">@focus.fellowship</p>

                  <div className="d-flex justify-content-center gap-3 mb-3">
                    <div className="text-center">
                      <div className="fw-bold text-dark" style={{ fontSize: '0.95rem' }}>
                        2.2K
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.7rem' }}>
                        Followers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="fw-bold text-dark" style={{ fontSize: '0.95rem' }}>
                        21.4K
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.7rem' }}>
                        Likes
                      </div>
                    </div>
                  </div>

                  <Button
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-0"
                    style={{
                      background:
                        'linear-gradient(135deg, #25F4EE 0%, #FE2C55 100%)',
                      boxShadow: '0 6px 18px rgba(254,44,85,0.35)'
                    }}
                    size="sm"
                  >
                    <FaTiktok className="me-2" /> Follow Us
                  </Button>
                </Card>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </div>

      {/* MAP PLACEHOLDER + SOCIAL MEDIA */}
      <div className="bg-light py-5">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <Reveal>
                <Card className="border-0 shadow-sm h-100 overflow-hidden">
                  <div
                    style={{
                      height: '340px',
                      background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div className="text-center text-muted">
                      <FaMapMarkerAlt size={64} className="text-danger mb-3" />
                      <h4 className="fw-bold">Dire Dawa University</h4>
                      <p className="mb-3">Main Campus, Dire Dawa, Ethiopia</p>
                      <Button
                        variant="primary"
                        href="https://maps.google.com/?q=Dire+Dawa+University"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: 'linear-gradient(135deg, #3498db, #2980b9)',
                          border: 0
                        }}
                      >
                        Open in Google Maps <FaArrowRight className="ms-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Reveal>
            </Col>

            <Col lg={5}>
              <Reveal delay={150}>
                <Card className="border-0 shadow-sm h-100 p-4">
                  <h4 className="fw-bold text-center mb-4">
                    Follow Us on Social Media
                  </h4>
                  <div className="d-flex flex-column gap-3">
                    <Button
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-0 d-flex align-items-center justify-content-start py-3 ps-4"
                      style={{
                        background: 'linear-gradient(135deg, #0088cc, #00bcd4)',
                        borderRadius: '12px',
                        fontSize: '1rem'
                      }}
                    >
                      <FaTelegram className="me-3" size={20} /> Telegram Group
                    </Button>

                    <Button
                      href={TIKTOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-0 d-flex align-items-center justify-content-start py-3 ps-4"
                      style={{
                        background:
                          'linear-gradient(135deg, #000000 0%, #25F4EE 55%, #FE2C55 100%)',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        color: 'white',
                        boxShadow: '0 6px 18px rgba(254,44,85,0.25)'
                      }}
                    >
                      <FaTiktok className="me-3" size={20} /> TikTok
                    </Button>

                    <Button
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-0 d-flex align-items-center justify-content-start py-3 ps-4"
                      style={{
                        background: 'linear-gradient(135deg, #1877F2, #0d5bcc)',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        color: 'white',
                        boxShadow: '0 6px 18px rgba(24,119,242,0.30)'
                      }}
                    >
                      <FaFacebook className="me-3" size={20} /> Facebook Page
                    </Button>

                    <Button
                      variant="danger"
                      className="d-flex align-items-center justify-content-start py-3 ps-4"
                      style={{ borderRadius: '12px', fontSize: '1rem' }}
                      disabled
                    >
                      <FaYoutube className="me-3" size={20} /> YouTube (soon)
                    </Button>

                    <Button
                      className="border-0 d-flex align-items-center justify-content-start py-3 ps-4"
                      style={{
                        background:
                          'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
                        borderRadius: '12px',
                        fontSize: '1rem'
                      }}
                      disabled
                    >
                      <FaInstagram className="me-3" size={20} /> Instagram (soon)
                    </Button>
                  </div>
                </Card>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </div>

      {/* VERSE CARD */}
      <div className="bg-white py-5">
        <Container>
          <Reveal>
            <Card
              className="border-0 shadow-sm mx-auto overflow-hidden"
              style={{
                maxWidth: '820px',
                background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
                borderLeft: '6px solid #3498db'
              }}
            >
              <Card.Body className="p-5 text-center position-relative">
                <FaQuoteLeft
                  size={40}
                  className="text-primary mb-3"
                  style={{ opacity: 0.25 }}
                />
                <p
                  className="fst-italic mb-3"
                  style={{
                    fontSize: '1.15rem',
                    lineHeight: 1.8,
                    color: '#333'
                  }}
                >
                  "Itti fufees Yesus, 'Eenyu illee namoota duratti eenyu akkan ta'e
                  dhugaa ba'ee yoo mul'ise, anis abbaa koo isa waaqa irra jiru
                  duratti dhugaa nan ba'aaf. Eenyu illee namoota duratti yoo na
                  gane garuu, anis immoo abbaa koo isa waaqa irra jiru duratti
                  isa nan gana' jedhe."
                </p>
                <Badge bg="primary" className="px-3 py-2">
                  Matthew 10:32–33
                </Badge>
              </Card.Body>
            </Card>
          </Reveal>
        </Container>
      </div>

      <Footer />
    </>
  );
}