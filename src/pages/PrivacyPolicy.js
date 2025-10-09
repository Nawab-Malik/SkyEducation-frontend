import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Container fluid className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h1 className="fw-bold text-primary mb-3">Privacy Policy</h1>
            <p className="lead text-muted">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-5">
                  <div className="privacy-content">
                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">1. Information We Collect</h3>
                      <p className="mb-3">
                        We collect information you provide directly to us, such as when you:
                      </p>
                      <ul className="mb-3">
                        <li>Enroll in our courses or programs</li>
                        <li>Contact us through our website or forms</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Create an account on our platform</li>
                        <li>Participate in surveys or feedback forms</li>
                      </ul>
                      <p>
                        This may include your name, email address, phone number, educational background, 
                        and any other information you choose to provide.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">2. How We Use Your Information</h3>
                      <p className="mb-3">
                        We use the information we collect to:
                      </p>
                      <ul className="mb-3">
                        <li>Provide and deliver our educational services</li>
                        <li>Process enrollments and manage student records</li>
                        <li>Communicate with you about courses and updates</li>
                        <li>Send you marketing communications (with your consent)</li>
                        <li>Improve our services and develop new offerings</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">3. Information Sharing and Disclosure</h3>
                      <p className="mb-3">
                        We do not sell, trade, or otherwise transfer your personal information to third parties except:
                      </p>
                      <ul className="mb-3">
                        <li>With your explicit consent</li>
                        <li>To accrediting bodies for qualification verification</li>
                        <li>To service providers who assist in our operations</li>
                        <li>When required by law or legal process</li>
                        <li>To protect our rights or the safety of others</li>
                      </ul>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">4. Data Security</h3>
                      <p>
                        We implement appropriate security measures to protect your personal information against 
                        unauthorized access, alteration, disclosure, or destruction. However, no method of 
                        transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">5. Data Retention</h3>
                      <p>
                        We retain your personal information for as long as necessary to provide our services, 
                        comply with legal obligations, resolve disputes, and enforce our agreements. Student 
                        records may be retained for longer periods as required by educational regulations.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">6. Your Rights</h3>
                      <p className="mb-3">
                        You have the right to:
                      </p>
                      <ul className="mb-3">
                        <li>Access the personal information we hold about you</li>
                        <li>Correct inaccurate or incomplete information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Object to processing of your personal information</li>
                        <li>Withdraw consent for marketing communications</li>
                      </ul>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">7. Cookies and Tracking</h3>
                      <p>
                        Our website may use cookies and similar tracking technologies to enhance your experience. 
                        You can control cookie settings through your browser preferences.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">8. Changes to This Policy</h3>
                      <p>
                        We may update this Privacy Policy from time to time. We will notify you of any 
                        significant changes by posting the new policy on our website and updating the 
                        effective date.
                      </p>
                    </section>

                    <section className="mb-4">
                      <h3 className="fw-bold text-primary mb-3">9. Contact Us</h3>
                      <p className="mb-2">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                      </p>
                      <div className="contact-info">
                        <p className="mb-1"><strong>Email:</strong> Info@skyeducationltd.com</p>
                        <p className="mb-1"><strong>Phone:</strong> 0141 526 5555</p>
                        <p className="mb-1"><strong>Address:</strong> 281 Barlow Moor Road Chorlton Manchester M21 7GH</p>
                      </div>
                    </section>

                    <div className="text-center mt-5 pt-4 border-top">
                      <p className="text-muted small">
                        Last updated: January 2025
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;