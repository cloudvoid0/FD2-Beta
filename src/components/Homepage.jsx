import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import donationIllustration from '/Users/mario/Documents/NSU Files/Summer 24/CSE299/Food_Donation_Plat/src/assets/food-donation-illustration-download-in-svg-png-gif-file-formats--poor-humanitarian-homeless-charity-and-pack-miscellaneous-illustrations-8249229.png';

const Homepage = () => {
  return (
    <div style={{ backgroundColor: '#A9F48E', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container style={{ flexGrow: 1 }}>
        {/* Top Section (Text & Illustration) */}
        <Row className="align-items-center" style={{ minHeight: '60vh' }}>
          <Col md={6} style={{ paddingRight: '0' }}>
            <Typography variant="h2" style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '2.5rem' }}>
              Bridging the gap between food waste and hunger.
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '24px', fontSize: '1.25rem' }}>
              Let us nourish the nation together by connecting food banks, shelters and orphanages with the organizations discarding surplus food every day. 
              With just a few clicks, you can feed the needy, save water, reduce food waste and minimize environmental damage.
            </Typography>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={donationIllustration}
              alt="Donation Illustration"
              style={{ maxWidth: '90%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Donate Food and Obtain Food Cards Section */}
      <Container style={{ paddingBottom: '20px' }}>
        <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
          {/* Donate Food Card */}
          <Col md={6} style={{ paddingBottom: '16px' }}>
            <div style={{ maxWidth: '700px', marginLeft: '0' }}>
              <Link to="/donate-food" style={{ textDecoration: 'none' }}>
                <Card elevation={3} style={{
                  marginBottom: '16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  width: '100%',
                  maxWidth: '700px',
                  marginLeft: '0',    
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                  padding: '24px',  
                }}>
                  <CardContent>
                    <Typography variant="h6" style={{ color: '#FF4A4A', fontWeight: 'bold' }}>
                      Donate Food →
                    </Typography>
                    <Typography variant="body2">
                      Companies, restaurants, businesses or any individual can donate.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </Col>

          {/* Obtain Food Card */}
          <Col md={6} style={{ paddingBottom: '16px' }}>
            <div style={{ maxWidth: '700px', marginLeft: '0' }}>
              <Link to="/obtain-food" style={{ textDecoration: 'none' }}>
                <Card elevation={3} style={{
                  marginBottom: '16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  width: '100%',
                  maxWidth: '700px',  
                  marginLeft: '0',    
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                  padding: '24px',  
                }}>
                  <CardContent>
                    <Typography variant="h6" style={{ color: '#7C4DFF', fontWeight: 'bold' }}>
                      Obtain Food →
                    </Typography>
                    <Typography variant="body2">
                      Nonprofits can view and claim available donations or make requests.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;







