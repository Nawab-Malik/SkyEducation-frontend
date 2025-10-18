# EmailJS Setup Guide - URGENT FIX REQUIRED

## 🔴 Current Issue: 400 Error
Your EmailJS is returning a 400 error, which means the template configuration is incorrect.

## Current Configuration
- **Service ID**: `service_fsujzya`
- **Template ID**: `template_h850n5q`
- **Public Key**: `wP-Zr_F4cWNDcpdbN`

## 🧪 Test Your Configuration
Visit: http://localhost:5000/test-email
This test page will help you identify the exact issue.

## Required Template Variables in EmailJS Dashboard

Your EmailJS template MUST include these exact variables:

```
{{from_name}}      - Student's full name
{{from_email}}     - Student's email address
{{phone}}          - Student's phone number
{{course}}         - Course name
{{message}}        - Optional message from student
{{to_email}}       - Recipient email (Info@skyeducationltd.com)
```

## 📞 Contact Form Setup

Your contact form now uses the same EmailJS template. Make sure your template includes these variables for contact messages:

```
{{from_name}}      - Sender's full name
{{from_email}}     - Sender's email address
{{phone}}          - Sender's phone number
{{subject}}        - Message subject
{{message}}        - Message content
{{to_email}}       - Recipient email (Info@skyeducationltd.com)
```

**Template Example for Contact Form:**

Subject: New Contact Message - {{subject}}

Body:
```
Hello Sky Education Team,

You have received a new contact message:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

Please respond to the sender at {{from_email}}.

Best regards,
Sky Education Website
```

## Steps to Fix 400 Error

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/

2. **Verify Email Service**:
   - Go to "Email Services" tab
   - Find service ID: `service_fsujzya`
   - Make sure it's connected to Gmail: `am6242jan@gmail.com`
   - Status should be "Active"

3. **Check Email Template**:
   - Go to "Email Templates" tab
   - Find template ID: `template_h850n5q`
   - Click "Edit"
   - Make sure ALL variables above are present in your template
   - Variable names must match EXACTLY (case-sensitive)

4. **Verify Public Key**:
   - Go to "Account" tab
   - Check "API Keys" section
   - Public Key should be: `wP-Zr_F4cWNDcpdbN`

5. **Test the Configuration**:
   - After fixing the template, restart your React app
   - Fill out the enrollment form
   - Check browser console for detailed error messages

## Common Issues

### Issue: "Template not found" (400 error)
**Solution**: Template ID is wrong or template doesn't exist. Create a new template or verify the ID.

### Issue: "The service is not configured" (400 error)
**Solution**: Email service is not properly connected. Reconnect your Gmail account.

### Issue: "Template variables don't match"
**Solution**: Make sure your template uses the EXACT variable names listed above.

### Issue: Rate limit exceeded
**Solution**: EmailJS has a limit of 200 emails/month on free plan. Wait or upgrade.

## After Setup

1. Restart your development server:
   ```
   npm start
   ```

2. Test the form with real data

3. Check your Gmail inbox for the test email

## Need Help?

If you still get errors:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Submit the form
4. Share the exact error message shown in console
