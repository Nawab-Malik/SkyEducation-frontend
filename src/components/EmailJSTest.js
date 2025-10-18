import React, { useState, useEffect } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_1m5z38c';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_t63r45u';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'Hv9i_b-YOmO_7jxjR';

function EmailJSTest() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
    console.log('EmailJS initialized with:', {
      SERVICE_ID,
      TEMPLATE_ID,
      PUBLIC_KEY
    });
  }, []);

  const testEmail = async () => {
    setLoading(true);
    setStatus('Sending test email...');

    try {
      const templateParams = {
        from_name: 'Test Student',
        from_email: 'test@example.com',
        phone: '1234567890',
        course: 'Test Course',
        message: 'This is a test message',
        to_email: 'Info@skyeducationltd.com'
      };

      console.log('Sending with params:', templateParams);

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      console.log('Success:', result);
      setStatus(`✅ SUCCESS! Email sent. Status: ${result.status}`);
    } catch (error) {
      console.error('=== DETAILED ERROR ===');
      console.error('Error object:', error);
      console.error('Error text:', error.text);
      console.error('Error status:', error.status);
      console.error('Error message:', error.message);
      console.error('====================');
      
      setStatus(`❌ FAILED: ${error.text || error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <h2>EmailJS Configuration Test</h2>
      <div className="my-3">
        <p><strong>Service ID:</strong> {SERVICE_ID}</p>
        <p><strong>Template ID:</strong> {TEMPLATE_ID}</p>
        <p><strong>Public Key:</strong> {PUBLIC_KEY.substring(0, 10)}...</p>
      </div>
      
      <Button 
        onClick={testEmail} 
        disabled={loading}
        variant="primary"
      >
        {loading ? 'Sending...' : 'Send Test Email'}
      </Button>

      {status && (
        <Alert variant={status.includes('SUCCESS') ? 'success' : 'danger'} className="mt-3">
          {status}
        </Alert>
      )}

      <div className="mt-4">
        <h5>Troubleshooting Steps:</h5>
        <ol>
          <li>Open browser DevTools (F12) and check Console tab</li>
          <li>Click "Send Test Email" button above</li>
          <li>Look for detailed error messages in console</li>
          <li>Common issues:
            <ul>
              <li><strong>Template not found:</strong> Create template with ID: {TEMPLATE_ID}</li>
              <li><strong>Service not found:</strong> Verify service ID: {SERVICE_ID}</li>
              <li><strong>Invalid public key:</strong> Check Account settings</li>
              <li><strong>Template variables missing:</strong> Add all required variables to template</li>
            </ul>
          </li>
        </ol>
      </div>
    </Container>
  );
}

export default EmailJSTest;
