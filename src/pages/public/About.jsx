import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaBible,
  FaHandsHelping,
  FaUsers,
  FaHeart,
  FaGraduationCap,
  FaGlobeAfrica,
  FaPrayingHands,
  FaBookOpen,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  const values = [
    {
      icon: <FaBible size={32} color="white" />,
      gradient: 'linear-gradient(135deg, #3498db, #2980b9)',
      title: 'Biblical Foundation',
      text: 'Every activity, teaching, and decision is grounded in Scripture. We believe the Bible is God\'s inspired Word and our final authority for faith and life.'
    },
    {
      icon: <FaPrayingHands size={32} color="white" />,
      gradient: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
      title: 'Prayer & Devotion',
      text: 'We gather weekly for prayer, worship, and Bible study. Prayer is not a ritual for us — it is conversation with a living God who hears and answers.'
    },
    {
      icon: <FaHandsHelping size={32} color="white" />,
      gradient: 'linear-gradient(135deg, #27ae60, #16a085)',
      title: 'Service & Compassion',
      text: 'We serve our campus and community through practical acts of love — visiting the sick, supporting the needy, and standing with the marginalized.'
    },
    {
      icon: <FaUsers size={32} color="white" />,
      gradient: 'linear-gradient(135deg, #f39c12, #e67e22)',
      title: 'Fellowship & Unity',
      text: 'We are a family. Across departments, languages, and backgrounds, we unite around Christ and grow together in love and accountability.'
    },
    {
      icon: <FaGraduationCap size={32} color="white" />,
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
      title: 'Academic Excellence',
      text: 'We encourage our members to excel in their studies as an act of worship — honoring God with the minds He gave us.'
    },
    {
      icon: <FaGlobeAfrica size={32} color="white" />,
      gradient: 'linear-gradient(135deg, #1abc9c, #16a085)',
      title: 'Mission & Outreach',
      text: 'From Dire Dawa to the ends of the earth, we share the gospel through words and deeds, locally and beyond.'
    }
  ];

  const milestones = [
    { year: 'Founded', text: 'A small group of students began meeting for prayer and Bible study on the Dire Dawa University campus.' },
    { year: 'Growth', text: 'The fellowship expanded across departments and dormitories, welcoming students from every region of Ethiopia.' },
    { year: 'Outreach', text: 'We launched community service projects, hospital visits, and campus evangelism programs.' },
    { year: 'Today', text: 'A vibrant, student-led community committed to worship, discipleship, and service — still growing in faith and number.' }
  ];

  return (
    <>
      <Header />

      {/* HERO BANNER */}
      <div
        className="py-5 text-white"
        style={{
          background: 'linear-gradient(135deg, #2c3e50, #3498db)',
          marginBottom: '0'
        }}
      >
        <Container className="py-4">
          <h1 className="display-4 fw-bold mb-2">About Our Team</h1>
          <p className="lead mb-0" style={{ maxWidth: '720px' }}>
            A student-led Christian community at Dire Dawa University —
            growing together in faith, fellowship, and service.
          </p>
        </Container>
      </div>

      {/* INTRO */}
      <div className="bg-light py-5">
        <Container>
          <Card className="border-0 shadow-sm p-4 p-md-5">
            <h2 className="text-primary fw-bold mb-4">Who We Are</h2>
            <p className="lead" style={{ lineHeight: 1.8 }}>
              The <strong>FOCUS DDU Evangelical Team</strong> is a student-led Christian
              community at <strong>Dire Dawa University</strong>. We are committed
              to sharing the love of Christ, growing in faith, and serving our
              campus and community.
            </p>
            <p style={{ lineHeight: 1.8 }}>
              We are not a denomination or a formal church. We are a fellowship —
              a family of students from different backgrounds, departments, and
              regions of Ethiopia, united by one faith in Jesus Christ. Whether
              you have been a Christian your whole life or are simply curious
              about faith, you are welcome here.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              We meet regularly for worship, prayer, Bible study, and fellowship.
              We serve our campus through practical love. And we encourage one
              another to live out the gospel in every area of life — in the
              classroom, in the dormitory, and in the community.
            </p>
          </Card>
        </Container>
      </div>

      {/* MISSION & VISION */}
      <div className="bg-white py-5">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card
                className="h-100 border-0 shadow-sm p-4"
                style={{
                  borderLeft: '5px solid #3498db',
                  background: 'linear-gradient(135deg, #f8f9fa, #ffffff)'
                }}
              >
                <Badge bg="primary" className="mb-3 align-self-start px-3 py-2">
                  Our Mission
                </Badge>
                <h3 className="fw-bold text-dark mb-3">Why We Exist</h3>
                <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: 0 }}>
                  To make disciples of Jesus Christ among students at Dire Dawa
                  University and beyond — through worship, biblical teaching,
                  prayer, fellowship, and compassionate service. We exist to
                  help every student encounter Christ, grow in Him, and live
                  out His love in the world.
                </p>
              </Card>
            </Col>

            <Col md={6}>
              <Card
                className="h-100 border-0 shadow-sm p-4"
                style={{
                  borderLeft: '5px solid #27ae60',
                  background: 'linear-gradient(135deg, #f8f9fa, #ffffff)'
                }}
              >
                <Badge bg="success" className="mb-3 align-self-start px-3 py-2">
                  Our Vision
                </Badge>
                <h3 className="fw-bold text-dark mb-3">Where We're Going</h3>
                <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: 0 }}>
                  A generation of Ethiopian students transformed by the gospel —
                  leaders of integrity, servants of their communities, and
                  ambassadors of Christ in every sector of society. We envision
                  a campus where faith is alive, hope is real, and love is
                  visible.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CORE VALUES */}
      <div className="bg-light py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="text-primary fw-bold mb-2">Our Core Values</h2>
            <p className="text-muted">The convictions that shape who we are</p>
          </div>

          <Row className="g-4">
            {values.map((v, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '72px',
                      height: '72px',
                      background: v.gradient,
                      flexShrink: 0
                    }}
                  >
                    {v.icon}
                  </div>
                  <Card.Title className="fw-bold text-dark fs-5 mb-2">
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

      {/* OUR STORY / HISTORY */}
      <div className="bg-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="text-primary fw-bold mb-2">Our Story</h2>
            <p className="text-muted">How God has led us this far</p>
          </div>

          <Row>
            <Col lg={8} className="mx-auto">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="d-flex mb-4"
                  style={{ position: 'relative' }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #3498db, #2980b9)',
                      color: 'white',
                      fontWeight: 'bold',
                      marginRight: '20px'
                    }}
                  >
                    <FaCheckCircle size={20} color="white" />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">{m.year}</h5>
                    <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>

      {/* WHAT WE BELIEVE */}
      <div className="bg-light py-5">
        <Container>
          <Card className="border-0 shadow-sm p-4 p-md-5">
            <h2 className="text-primary fw-bold mb-4">What We Believe</h2>
            <Row className="g-4">
              <Col md={6}>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <FaBookOpen className="text-primary me-3 mt-1 flex-shrink-0" />
                    <span><strong>The Bible</strong> is the inspired, authoritative Word of God.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <FaHeart className="text-danger me-3 mt-1 flex-shrink-0" />
                    <span><strong>Jesus Christ</strong> is the Son of God, who died and rose again for our salvation.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <FaPrayingHands className="text-primary me-3 mt-1 flex-shrink-0" />
                    <span><strong>Salvation</strong> is by grace through faith in Christ alone.</span>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <FaUsers className="text-success me-3 mt-1 flex-shrink-0" />
                    <span><strong>The Church</strong> is the body of Christ, called to worship and serve together.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <FaGlobeAfrica className="text-info me-3 mt-1 flex-shrink-0" />
                    <span><strong>The Great Commission</strong> calls us to make disciples of all nations.</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <FaHandsHelping className="text-warning me-3 mt-1 flex-shrink-0" />
                    <span><strong>Love</strong> for God and neighbor is the greatest commandment.</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>

      {/* CALL TO ACTION */}
      <div
        className="py-5 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #2c3e50, #3498db)' }}
      >
        <Container className="py-4">
          <h2 className="fw-bold mb-3">Join Us</h2>
          <p className="lead mb-4" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Whether you're a student at Dire Dawa University or simply passing
            through, you are welcome to fellowship with us.
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg fw-bold px-5 py-3"
            style={{ borderRadius: '50px' }}
          >
            Get in Touch <FaArrowRight className="ms-2" />
          </Link>
        </Container>
      </div>

      <Footer />
    </>
  );
}