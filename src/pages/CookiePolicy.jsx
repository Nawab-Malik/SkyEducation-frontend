import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../components/Footer";

const CookiePolicy = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Container fluid className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h1 className="fw-bold text-primary mb-3">Cookie Policy</h1>
            <p className="lead text-muted">
              Learn about how we use cookies and similar technologies on our website.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-5">
                  <div className="cookie-policy-content">
                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">What Are Cookies</h3>
                      <p>
                        Cookies are small text files that are stored on your computer or mobile device when you visit our website.
                        They help us provide you with a better browsing experience by remembering your preferences and understanding
                        how you use our site.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">How We Use Cookies</h3>
                      <p className="mb-3">We use cookies for several purposes:</p>
                      <ul className="mb-3">
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                        <li><strong>Functional Cookies:</strong> Enable enhanced functionality like live chat or video embedding</li>
                        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                      </ul>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">Managing Your Cookie Preferences</h3>
                      <p className="mb-3">
                        You have the right to accept or reject cookies. You can manage your cookie preferences through:
                      </p>
                      <ul className="mb-3">
                        <li>The cookie consent banner when you first visit our site</li>
                        <li>Your browser settings to block or delete cookies</li>
                        <li>Our privacy settings (where available)</li>
                      </ul>
                      <p>
                        Please note that disabling certain cookies may affect the functionality of our website.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">Third-Party Cookies</h3>
                      <p>
                        We may use third-party services that place cookies on your device, such as Google Analytics for
                        website analytics or social media platforms for sharing functionality. These third parties have
                        their own privacy policies and cookie practices.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">Updates to This Policy</h3>
                      <p>
                        We may update this Cookie Policy from time to time to reflect changes in our practices or for
                        other operational, legal, or regulatory reasons. We will notify you of any material changes by
                        updating the "Last Updated" date at the top of this policy.
                      </p>
                    </section>

                    <section>
                      <h3 className="fw-bold text-primary mb-3">Contact Us</h3>
                      <p>
                        If you have any questions about our use of cookies or this Cookie Policy, please contact us
                        through our website or reach out to our privacy team.
                      </p>
                    </section>
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

export default CookiePolicy;
