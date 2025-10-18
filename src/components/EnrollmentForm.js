import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_1m5z38c';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_t63r45u';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'Hv9i_b-YOmO_7jxjR';

const EnrollmentForm = ({ show, onHide, courseName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: courseName || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        course: formData.course,
        message: formData.message || 'No additional message',
        to_email: 'Info@skyeducationltd.com'
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS Success:', result);

      if (result.status === 200) {
        setSubmitStatus({
          success: true,
          message: 'Your enrollment request has been sent successfully! We will contact you shortly.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: courseName || '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('=== EmailJS Error Details ===');
      console.error('Full Error:', error);
      console.error('Error Text:', error.text);
      console.error('Error Status:', error.status);
      console.error('Error Message:', error.message);
      console.error('Service ID:', SERVICE_ID);
      console.error('Template ID:', TEMPLATE_ID);
      console.error('Public Key:', PUBLIC_KEY);
      console.error('============================');
      
      let errorMessage = 'Failed to send enrollment request. ';
      if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error.status === 400) {
        errorMessage += 'Template configuration error. Please check: 1) Template ID exists, 2) All template variables are correct, 3) Email service is connected.';
      } else {
        errorMessage += 'Please try again later.';
      }
      
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Enroll in {courseName || 'Course'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitStatus.message && (
          <Alert variant={submitStatus.success ? 'success' : 'danger'}>
            {submitStatus.message}
          </Alert>
        )}

        <div className="mb-3">
          <p className="text-muted small">
            Fill out the form below and we'll send your enrollment request to our team.
          </p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name *</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number *</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control
              as="textarea"
              name="course"
              value={formData.course}
              onChange={handleChange}
              rows={2}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Any questions or additional information?"
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              onClick={onHide}
              className="me-2"
              disabled={isSubmitting}
            >
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Enrollment'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EnrollmentForm;
