# 🔧 Email Not Receiving - Troubleshooting Guide

## Current Setup
- **Recipient Email**: Info@skyeducationltd.com
- **Service ID**: service_fsujzya
- **Template ID**: template_h850n5q
- **Public Key**: wP-Zr_F4cWNDcpdbN

---

## ⚠️ Most Common Reasons Emails Don't Arrive

### 1. **EmailJS Template Configuration Issues**

#### ✅ Check Your EmailJS Dashboard

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Find template: `template_h850n5q`
3. Click "Edit"
4. **CRITICAL**: Verify the "To Email" field

**The template should have:**
```
To Email: {{to_email}}
```

**NOT hardcoded like:**
```
To Email: Info@skyeducationltd.com  ❌ WRONG
```

The `{{to_email}}` variable allows your code to dynamically set the recipient.

---

### 2. **Gmail Spam/Junk Folder**

EmailJS emails often land in spam initially.

**Check:**
1. Open Gmail: https://mail.google.com/
2. Click "Spam" or "Junk" folder on the left
3. Look for emails from your EmailJS service
4. If found, mark as "Not Spam"

---

### 3. **EmailJS Service Not Connected to Gmail**

Your EmailJS service might not be properly connected to `Info@skyeducationltd.com`.

**Fix:**
1. Go to: https://dashboard.emailjs.com/admin
2. Click "Email Services" tab
3. Find service: `service_fsujzya`
4. Check if it shows your Gmail: `Info@skyeducationltd.com`
5. If not, click "Add New Service" → Choose Gmail → Connect `Info@skyeducationltd.com`
6. Update the SERVICE_ID in your code if you create a new service

---

### 4. **EmailJS Free Plan Limits**

**Free Plan Limits:**
- 200 emails per month
- 2 emails per second

**Check if you've hit the limit:**
1. Go to: https://dashboard.emailjs.com/admin/account
2. Check "Usage" section
3. If at 200/200, you need to wait for next month or upgrade

---

### 5. **Template Variables Mismatch**

Your code sends these variables:
```javascript
{
  to_email: 'Info@skyeducationltd.com',
  from_name: 'Student Name',
  from_email: 'student@email.com',
  phone: '1234567890',
  course: 'Course Name',
  message: 'Message text'
}
```

**Your EmailJS template MUST include ALL these variables:**
```
{{to_email}}
{{from_name}}
{{from_email}}
{{phone}}
{{course}}
{{message}}
```

If any variable is missing in the template, EmailJS will fail silently.

---

## 🧪 Step-by-Step Testing

### Test 1: Use EmailJS Test Page

1. Start your React app: `npm start`
2. Visit: http://localhost:3000/test-email
3. Click "Send Test Email"
4. Check browser console (F12) for errors
5. Check `Info@skyeducationltd.com` inbox (and spam folder)

### Test 2: Direct EmailJS Dashboard Test

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Find template: `template_h850n5q`
3. Click "Test It" button
4. Fill in test values:
   - to_email: Info@skyeducationltd.com
   - from_name: Test Name
   - from_email: test@test.com
   - phone: 1234567890
   - course: Test Course
   - message: Test message
5. Click "Send Test Email"
6. Check if email arrives at `Info@skyeducationltd.com`

**If this test fails**, your EmailJS template or service is misconfigured.

---

## 🔍 Debug Steps

### Step 1: Check Browser Console

1. Open your enrollment form
2. Press F12 to open DevTools
3. Go to "Console" tab
4. Submit the form
5. Look for:
   - ✅ "Sending email with params:" - Shows what's being sent
   - ✅ "EmailJS Success:" - Confirms it was sent
   - ❌ "EmailJS Error:" - Shows what failed

### Step 2: Check Network Tab

1. Open DevTools (F12)
2. Go to "Network" tab
3. Submit the form
4. Look for request to `api.emailjs.com`
5. Click on it to see:
   - Request payload (what you sent)
   - Response (what EmailJS returned)
   - Status code (200 = success, 400 = error)

---

## 🛠️ Quick Fixes

### Fix 1: Verify Template "To Email" Field

In EmailJS dashboard, your template's "To Email" should be:
```
{{to_email}}
```

NOT:
```
Info@skyeducationltd.com
```

### Fix 2: Check Gmail Settings

1. Go to Gmail Settings (gear icon → "See all settings")
2. Click "Filters and Blocked Addresses"
3. Make sure EmailJS emails aren't blocked
4. Check "Forwarding and POP/IMAP" - ensure IMAP is enabled

### Fix 3: Whitelist EmailJS in Gmail

1. Add `noreply@emailjs.com` to your Gmail contacts
2. This helps prevent emails from going to spam

### Fix 4: Check Email Service Status

1. Go to: https://dashboard.emailjs.com/admin
2. Click "Email Services"
3. Your service should show "Active" status
4. If it shows "Error" or "Disconnected", reconnect it

---

## 📧 Expected Email Format

When working correctly, you should receive emails like:

**Subject:** New Enrollment Request - [Course Name]

**From:** Your EmailJS Service (via EmailJS)

**Body:**
```
Hello Sky Education Team,

You have received a new enrollment request:

Student Name: [Name]
Email: [Email]
Phone: [Phone]
Course: [Course]

Message:
[Message]

Please contact the student at [Email] or [Phone].

Best regards,
Sky Education Enrollment System
```

---

## 🆘 Still Not Working?

### Run This Test:

1. Open browser console (F12)
2. Paste this code:
```javascript
emailjs.send(
  'service_fsujzya',
  'template_h850n5q',
  {
    to_email: 'Info@skyeducationltd.com',
    from_name: 'Console Test',
    from_email: 'test@test.com',
    phone: '0000000000',
    course: 'Debug Test',
    message: 'Testing from console'
  }
).then(
  (result) => console.log('✅ SUCCESS:', result),
  (error) => console.error('❌ ERROR:', error)
);
```
3. Press Enter
4. Check the console output
5. Check your Gmail

### If Console Test Works But Form Doesn't:

The issue is in your form code, not EmailJS configuration.

### If Console Test Fails:

The issue is with your EmailJS setup:
1. Wrong Service ID
2. Wrong Template ID
3. Wrong Public Key
4. Template variables mismatch
5. Service not connected to Gmail

---

## 📞 Contact EmailJS Support

If nothing works:
1. Go to: https://www.emailjs.com/docs/
2. Click "Contact Support"
3. Provide:
   - Service ID: service_fsujzya
   - Template ID: template_h850n5q
   - Error message from console
   - Screenshot of your template configuration

---

## ✅ Checklist

Before asking for help, verify:

- [ ] EmailJS service is connected to `Info@skyeducationltd.com`
- [ ] Template ID `template_h850n5q` exists in your account
- [ ] Template "To Email" field contains `{{to_email}}`
- [ ] All template variables are present in the template
- [ ] Public key is correct: `wP-Zr_F4cWNDcpdbN`
- [ ] Checked Gmail spam/junk folder
- [ ] Not exceeded 200 emails/month limit
- [ ] Browser console shows "EmailJS Success" message
- [ ] Network tab shows 200 status code for EmailJS request
- [ ] Tested from EmailJS dashboard directly

---

## 🎯 Most Likely Issue

Based on experience, **90% of the time** the issue is:

**The EmailJS template's "To Email" field is hardcoded instead of using `{{to_email}}`**

Fix this in your EmailJS dashboard and it should work immediately.
