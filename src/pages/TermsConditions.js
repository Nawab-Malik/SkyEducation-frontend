import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../components/Footer";

const TermsConditions = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Container fluid className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h1 className="fw-bold text-primary mb-3">Terms & Conditions</h1>
            <p className="lead text-muted">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-5">
                  <div className="terms-content">
                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">1. Acceptance of Terms</h3>
                      <p>
                        By accessing and using Sky Education's services, you accept and agree to be bound by 
                        the terms and provision of this agreement. These Terms and Conditions apply to all 
                        users of Sky Education's courses, programs, and related services.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">2. Course Enrollment and Fees</h3>
                      <div className="mb-3">
                        <h5 className="fw-semibold mb-2">2.1 Enrollment Process</h5>
                        <p className="mb-3">
                          Course enrollment is confirmed upon receipt of completed application forms and 
                          payment of required fees. Places are allocated on a first-come, first-served basis.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h5 className="fw-semibold mb-2">2.2 Payment Terms</h5>
                        <ul className="mb-3">
                          <li>Course fees must be paid in full before course commencement unless alternative arrangements are agreed</li>
                          <li>Payment plans may be available for certain courses</li>
                          <li>All fees are non-refundable unless otherwise stated</li>
                        </ul>
                      </div>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">3. Student Responsibilities</h3>
                      <p className="mb-3">Students are expected to:</p>
                      <ul className="mb-3">
                        <li>Attend all scheduled classes and practical sessions</li>
                        <li>Complete assignments and assessments on time</li>
                        <li>Maintain professional conduct throughout the course</li>
                        <li>Respect other students, instructors, and staff</li>
                        <li>Follow health and safety guidelines</li>
                        <li>Provide accurate information during enrollment</li>
                      </ul>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">4. Cancellation and Refund Policy</h3>
                      <div className="mb-3">
                        <h5 className="fw-semibold mb-2">4.1 Course Cancellation by Sky Education</h5>
                        <p className="mb-3">
                          Sky Education reserves the right to cancel courses due to insufficient enrollment, 
                          instructor unavailability, or other unforeseen circumstances. In such cases, 
                          students will receive a full refund or be offered an alternative course.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h5 className="fw-semibold mb-2">4.2 Student Withdrawal</h5>
                        <ul className="mb-3">
                          <li>Withdrawal more than 14 days before course start: Full refund minus £50 administration fee</li>
                          <li>Withdrawal 7-14 days before course start: 50% refund</li>
                          <li>Withdrawal less than 7 days before or after course start: No refund</li>
                        </ul>
                      </div>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">5. Certification and Qualifications</h3>
                      <p className="mb-3">
                        Certificates and qualifications are awarded upon successful completion of course 
                        requirements including:
                      </p>
                      <ul className="mb-3">
                        <li>Attendance of minimum required hours</li>
                        <li>Passing all assessments and examinations</li>
                        <li>Completion of practical requirements</li>
                        <li>Payment of all outstanding fees</li>
                      </ul>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">6. Intellectual Property</h3>
                      <p>
                        All course materials, including but not limited to handouts, presentations, videos, 
                        and digital content, are the intellectual property of Sky Education or its licensors. 
                        Students may use materials for personal study but may not reproduce, distribute, 
                        or commercialize any content without written permission.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">7. Limitation of Liability</h3>
                      <p>
                        Sky Education's liability is limited to the fees paid for the specific course. 
                        We are not liable for any indirect, consequential, or punitive damages. Students 
                        participate in practical activities at their own risk and are advised to obtain 
                        appropriate insurance coverage.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">8. Data Protection and Privacy</h3>
                      <p>
                        Student information is collected and processed in accordance with our Privacy Policy 
                        and applicable data protection laws. We may use student information for course 
                        administration, certification purposes, and marketing communications (with consent).
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">9. Code of Conduct</h3>
                      <p className="mb-3">
                        Sky Education maintains a zero-tolerance policy for:
                      </p>
                      <ul className="mb-3">
                        <li>Discrimination, harassment, or bullying</li>
                        <li>Disruptive behavior in classes</li>
                        <li>Cheating or plagiarism</li>
                        <li>Damage to property or equipment</li>
                        <li>Violation of health and safety protocols</li>
                      </ul>
                      <p>
                        Violations may result in suspension or expulsion without refund.
                      </p>
                    </section>

                    <section className="mb-5">
                      <h3 className="fw-bold text-primary mb-3">10. Changes to Terms</h3>
                      <p>
                        Sky Education reserves the right to modify these terms and conditions at any time. 
                        Changes will be communicated to enrolled students and posted on our website. 
                        Continued use of our services constitutes acceptance of modified terms.
                      </p>
                    </section>

                    <section className="mb-4">
                      <h3 className="fw-bold text-primary mb-3">11. Contact Information</h3>
                      <p className="mb-2">
                        For questions about these Terms and Conditions, please contact us:
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

export default TermsConditions;