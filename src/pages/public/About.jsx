import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaBible, FaHandsHelping, FaUsers, FaHeart, FaGraduationCap,
  FaGlobeAfrica, FaPrayingHands, FaBookOpen, FaArrowRight, FaCheckCircle
} from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  const values = [
    { icon: <FaBible size={36} color="white" />, gradient: 'linear-gradient(135deg, #3498db, #2980b9)', title: 'Biblical Foundation', text: 'Every activity, teaching, and decision is grounded in Scripture. We believe the Bible is God\'s inspired Word and our final authority.' },
    { icon: <FaPrayingHands size={36} color="white" />, gradient: 'linear-gradient(135deg, #9b59b6, #8e44ad)', title: 'Prayer & Devotion', text: 'We gather weekly for prayer, worship, and Bible study. Prayer is not a ritual for us — it is conversation with a living God.' },
    { icon: <FaHandsHelping size={36} color="white" />, gradient: 'linear-gradient(135deg, #27ae60, #16a085)', title: 'Service & Compassion', text: 'We serve our campus and community through practical acts of love — visiting the sick, supporting the needy, and standing with the marginalized.' },
    { icon: <FaUsers size={36} color="white" />, gradient: 'linear-gradient(135deg, #f39c12, #e67e22)', title: 'Fellowship & Unity', text: 'We are a family. Across departments, languages, and backgrounds, we unite around Christ and grow together in love.' },
    { icon: <FaGraduationCap size={36} color="white" />, gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)', title: 'Academic Excellence', text: 'We encourage our members to excel in their studies as an act of worship — honoring God with the minds He gave us.' },
    { icon: <FaGlobeAfrica size={36} color="white" />, gradient: 'linear-gradient(135deg, #1abc9c, #16a085)', title: 'Mission & Outreach', text: 'From Dire Dawa to the ends of the earth, we share the gospel through words and deeds, locally and beyond.' }
  ];

  const milestones = [
    { year: 'Founded', text: 'A small group of students began meeting for prayer and Bible study on the Dire Dawa University campus.' },
    { year: 'Growth', text: 'The fellowship expanded across departments and dormitories, welcoming students from every region of Ethiopia.' },
    { year: 'Outreach', text: 'We launched community service projects, hospital visits, and campus evangelism programs.' },
    { year: 'Today', text: 'A vibrant, student-led community committed to worship, discipleship, and service — still growing in faith and number.' }
  ];

  const beliefs = [
    { icon: <FaBookOpen size={24} className="text-primary" />, title: 'The Bible', text: 'is the inspired, authoritative Word of God.' },
    { icon: <FaHeart size={24} className="text-danger" />, title: 'Jesus Christ', text: 'is the Son of God, who died and rose again for our salvation.' },
    { icon: <FaPrayingHands size={24} className="text-primary" />, title: 'Salvation', text: 'is by grace through faith in Christ alone.' },
    { icon: <FaUsers size={24} className="text-success" />, title: 'The Church', text: 'is the body of Christ, called to worship and serve together.' },
    { icon: <FaGlobeAfrica size={24} className="text-info" />, title: 'The Great Commission', text: 'calls us to make disciples of all nations.' },
    { icon: <FaHandsHelping size={24} className="text-warning" />, title: 'Love', text: 'for God and neighbor is the greatest commandment.' },
  ];

  // Reusable hover style
  const hoverStyle = {
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'default'
  };
  const handleEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
  };

  return (
    <>
      <Header />

      {/* ═══════════════════════════════════════════ */}
      {/* HERO BANNER (GLASSMORPHISM)                 */}
      {/* ═══════════════════════════════════════════ */}
      <div
        className="py-5 text-white position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a2a4a 0%, #2c3e70 50%, #3498db 100%)',
          paddingTop: '100px', paddingBottom: '100px'
        }}
      >
        {/* Background Decorative Circles */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />

        <Container className="position-relative text-center" style={{ zIndex: 1 }}>
          <Badge bg="warning" text="dark" className="mb-3 px-3 py-2 rounded-pill shadow-sm fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
            Get to know us
          </Badge>
          <h1 className="display-3 fw-bold mb-3" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
            About Our Team
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: '720px', fontSize: '1.3rem', opacity: 0.9 }}>
            A student-led Christian community at Dire Dawa University —
            growing together in faith, fellowship, and service.
          </p>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* INTRO (OVERLAPPING CARD)                    */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-light pb-5">
        <Container>
          <Card className="border-0 shadow-lg p-4 p-md-5" style={{ marginTop: '-60px', borderRadius: '20px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
            <Row className="align-items-center">
              <Col lg={8}>
                <h2 className="text-primary fw-bold mb-4">Who We Are</h2>
                <p className="lead" style={{ lineHeight: 1.9, color: '#444' }}>
                  The <strong>FOCUS DDU Evangelical Team</strong> is a student-led Christian
                  community at <strong>Dire Dawa University</strong>. We are committed
                  to sharing the love of Christ, growing in faith, and serving our
                  campus and community.
                </p>
                <p style={{ lineHeight: 1.8, color: '#666' }}>
                  We are not a denomination or a formal church. We are a family of students from different backgrounds, departments, and regions of Ethiopia, united by one faith in Jesus Christ.
                </p>
                <p style={{ lineHeight: 1.8, color: '#666', marginBottom: 0 }}>
                  We meet regularly for worship, prayer, Bible study, and fellowship. We encourage one another to live out the gospel in every area of life.
                </p>
              </Col>
              <Col lg={4} className="d-none d-lg-flex justify-content-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px', background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
                  <FaBible size={80} className="text-primary opacity-50" />
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* MISSION & VISION                            */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-white py-5">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm p-5" style={{ borderTop: '5px solid #3498db', transition: 'all 0.3s ease' }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <Badge bg="primary" className="mb-3 align-self-start px-3 py-2 rounded-pill">
                  Our Mission
                </Badge>
                <h3 className="fw-bold text-dark mb-3">Why We Exist</h3>
                <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 0 }}>
                  To make disciples of Jesus Christ among students at Dire Dawa University and beyond — through worship, biblical teaching, prayer, fellowship, and compassionate service. We exist to help every student encounter Christ and grow in Him.
                </p>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm p-5" style={{ borderTop: '5px solid #27ae60', transition: 'all 0.3s ease' }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <Badge bg="success" className="mb-3 align-self-start px-3 py-2 rounded-pill">
                  Our Vision
                </Badge>
                <h3 className="fw-bold text-dark mb-3">Where We're Going</h3>
                <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 0 }}>
                  A generation of Ethiopian students transformed by the gospel — leaders of integrity, servants of their communities, and ambassadors of Christ. We envision a campus where faith is alive, hope is real, and love is visible.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* CORE VALUES                                 */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-light py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="text-primary fw-bold mb-2" style={{ fontSize: '2.5rem' }}>Our Core Values</h2>
            <p className="text-muted fs-5">The convictions that shape who we are</p>
          </div>

          <Row className="g-4">
            {values.map((v, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 border-0 shadow-sm text-center p-4" style={hoverStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '80px', height: '80px', background: v.gradient, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                    {v.icon}
                  </div>
                  <Card.Title className="fw-bold text-dark fs-5 mb-3">
                    {v.title}
                  </Card.Title>
                  <Card.Text className="text-muted" style={{ lineHeight: 1.7 }}>
                    {v.text}
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* OUR STORY (MODERN TIMELINE)                 */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="text-primary fw-bold mb-2" style={{ fontSize: '2.5rem' }}>Our Story</h2>
            <p className="text-muted fs-5">How God has led us this far</p>
          </div>

          <Row>
            <Col lg={8} className="mx-auto">
              <div className="position-relative" style={{ borderLeft: '3px solid #e9ecef', marginLeft: '20px', paddingLeft: '30px' }}>
                {milestones.map((m, i) => (
                  <div key={i} className="mb-5 position-relative">
                    {/* Timeline Dot */}
                    <div className="position-absolute d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', background: '#3498db', borderRadius: '50%', left: '-49px', top: '0', border: '4px solid white', boxShadow: '0 0 0 3px rgba(52,152,219,0.2)' }}>
                      <FaCheckCircle size={14} color="white" />
                    </div>
                    
                    {/* Timeline Content */}
                    <h4 className="fw-bold text-dark mb-2">{m.year}</h4>
                    <p className="text-muted mb-0" style={{ lineHeight: 1.7, fontSize: '1.05rem' }}>
                      {m.text}
                    </p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* WHAT WE BELIEVE                             */}
      {/* ═══════════════════════════════════════════ */}
      <div className="bg-light py-5">
        <Container>
          <Card className="border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '20px' }}>
            <h2 className="text-primary fw-bold mb-5 text-center" style={{ fontSize: '2.5rem' }}>What We Believe</h2>
            <Row className="g-4">
              {beliefs.map((b, i) => (
                <Col md={6} key={i}>
                  <div className="d-flex align-items-start p-3 rounded-3" style={{ background: '#f8f9fa', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#e9ecef'} onMouseLeave={(e) => e.currentTarget.style.background = '#f8f9fa'}>
                    <div className="me-3 mt-1 flex-shrink-0">{b.icon}</div>
                    <span className="text-dark" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                      <strong>{b.title}</strong> {b.text}
                    </span>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* CALL TO ACTION                              */}
      {/* ═══════════════════════════════════════════ */}
      <div className="py-5 text-white text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2a4a 0%, #2c3e70 50%, #3498db 100%)' }}>
        <Container className="py-5 position-relative" style={{ zIndex: 1 }}>
          <h2 className="display-5 fw-bold mb-3">Join Us</h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '640px', fontSize: '1.2rem', opacity: 0.9 }}>
            Whether you're a student at Dire Dawa University or simply passing through, you are welcome to fellowship with us.
          </p>
          <Button as={Link} to="/contact" size="lg" variant="warning" className="fw-bold px-5 py-3 rounded-pill shadow-lg text-dark" style={{ fontSize: '1.1rem' }}>
            Get in Touch <FaArrowRight className="ms-2" />
          </Button>
        </Container>
      </div>

      <Footer />
    </>
  );
}