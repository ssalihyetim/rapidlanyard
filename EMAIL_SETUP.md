# Email Setup Guide for RapidLanyard Quote System

## Overview
The quote system now uses **Nodemailer with Gmail SMTP** to send professional emails to `yetimsalih1@gmail.com` when customers submit quote requests.

## Features Implemented ✅

### 1. **Business Email Notifications**
- **Simple Quote Requests** → Urgent email with customer details and attachments
- **Detailed Quote Requests** → Professional B2B email with complete project info
- **Rich HTML Templates** with company branding and action items
- **File Attachments** included in emails (logos, designs, etc.)

### 2. **Customer Confirmations** 
- Auto-confirmation emails sent to customers
- Professional branding with 2-hour response promise
- WhatsApp and email contact information included

### 3. **Form Features**
- **File Upload Support** - Multiple files, drag & drop, file preview
- **Real-time Validation** - Required field checking
- **Loading States** - Spinner and disabled states during submission
- **Error Handling** - Network errors and server failures
- **Success Messages** - Clear confirmation of submission

## Required Setup Steps

### Step 1: Gmail App Password Setup
1. **Enable 2-Factor Authentication** on yetimsalih1@gmail.com
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable "2-Step Verification"

2. **Generate App Password**
   - In Security settings, go to "App passwords"
   - Select "Mail" as the app type
   - Copy the 16-character password generated

3. **Update Environment Variables**
   - Open `.env.local` file
   - Replace `your-app-password-here` with the actual app password

### Step 2: Test Email Configuration
```bash
# The system will work once the app password is configured
# Test by submitting a quote request through either form
```

## Email Templates

### Business Email Features:
- **Urgent/Priority indicators** for time-sensitive responses
- **Customer contact information** clearly displayed  
- **Project requirements** formatted professionally
- **File attachments** automatically included
- **Next steps checklist** for quote preparation
- **Response time expectations** clearly stated

### Customer Confirmation Features:
- **Professional branding** with RapidLanyard logo
- **Clear expectations** (2-hour response time)
- **Multiple contact options** (Email + WhatsApp)
- **3-day delivery guarantee** messaging

## Alternative SMTP Providers

If you prefer not to use Gmail, you can easily switch to:

### SendGrid (Recommended for business)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Amazon SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-ses-access-key-id
SMTP_PASS=your-ses-secret-access-key
```

## API Endpoints

### Simple Quote: `POST /api/simple-quote`
- Accepts: FormData with files
- Fields: name, email, quantity, description, files[]
- Returns: Success/error response

### Detailed Quote: `POST /api/detailed-quote`  
- Accepts: FormData with files
- Fields: company, name, email, phone, product, quantity, delivery, timeline, message, logoUpload[]
- Returns: Success/error response

## File Upload Specifications
- **Accepted formats**: PNG, JPG, PDF, AI, EPS, SVG
- **File size limit**: 10MB per file
- **Multiple files**: Supported
- **Preview**: File name and size shown before upload
- **Security**: Files are validated server-side

## Error Handling
- **Network errors**: Clear message with retry suggestion
- **Server errors**: Fallback to WhatsApp contact
- **Validation errors**: Specific field-level feedback
- **File errors**: Size and format validation

## Testing Checklist ✅

### Simple Quote Form:
- [ ] Form submission with files
- [ ] Form submission without files  
- [ ] Error states (network failure)
- [ ] Success states and form reset
- [ ] File upload/preview/remove

### Detailed Quote Form:
- [ ] Complete form submission
- [ ] File attachment functionality
- [ ] All required field validation
- [ ] Loading states during submission
- [ ] Error and success feedback

### Email Delivery:
- [ ] Business emails arrive at yetimsalih1@gmail.com
- [ ] Customer confirmations sent successfully
- [ ] File attachments included correctly
- [ ] HTML formatting displays properly

## Next Steps for Production

1. **Set up professional email** (e.g., quotes@rapidlanyard.com)
2. **Consider upgrading to SendGrid** for better deliverability
3. **Add email analytics** to track open rates
4. **Set up email templates** in your email service provider
5. **Configure webhook notifications** for real-time alerts

## Support
If you encounter any issues with the email setup:
1. Check `.env.local` configuration
2. Verify Gmail app password is correct
3. Test with a simple quote submission
4. Check server logs for detailed error messages