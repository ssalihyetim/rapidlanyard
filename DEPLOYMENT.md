# RapidLanyard Deployment Guide

## Environment Variables Required for Vercel

Add these environment variables in your Vercel dashboard:

### **Required Variables:**
```env
RESEND_API_KEY=re_L9EtYudG_FEQqNdwppTbnrE5ZUKaNjnqt
```

### **Optional Backup SMTP (if needed):**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yetimsalih1@gmail.com
SMTP_PASS=iczi kjdx nnoe styp
```

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Add Resend email system with quote forms and file uploads"
git push origin main
```

### 2. Deploy to Vercel
1. **Connect to Vercel**: Import your GitHub repository
2. **Add Environment Variables**: In Vercel dashboard, add `RESEND_API_KEY`
3. **Deploy**: Vercel will automatically build and deploy

### 3. Domain Setup (Important!)
To receive emails at `salih@talepgetir.com`:
1. **Go to**: [resend.com/domains](https://resend.com/domains)
2. **Add domain**: `talepgetir.com`
3. **Add DNS records** as instructed by Resend
4. **Verify domain** - This enables email delivery

## Features Deployed

### ✅ Quote Forms
- **Simple Quote Form**: `/lanyards` page
- **Detailed Business Quote**: `/contact` page
- **File Upload Support**: Multiple files, drag & drop
- **Real-time Validation**: Form validation and error handling

### ✅ Email System
- **Business Notifications**: Sent to `salih@talepgetir.com`
- **Customer Confirmations**: Professional branded emails
- **File Attachments**: Logo/design files included
- **Professional Templates**: HTML formatted with urgent indicators

### ✅ Technical Features
- **Next.js 15**: Latest framework with Turbopack
- **Resend Integration**: Professional email service
- **File Processing**: Secure server-side handling
- **Mobile Responsive**: Works on all devices
- **Error Handling**: Comprehensive error states

## Post-Deployment Testing

1. **Test Quote Forms**: Submit both simple and detailed quotes
2. **Check Resend Dashboard**: View sent emails at [resend.com/logs](https://resend.com/logs)
3. **Verify File Uploads**: Ensure attachments are included
4. **Test Mobile**: Forms work on mobile devices

## Support

If emails aren't being received:
1. **Check Resend logs** for successful sending
2. **Verify domain** in Resend dashboard
3. **Check spam folder** if domain is verified
4. **Contact support** if issues persist

## Notes

- **Build Status**: ✅ Compiles successfully with minor linting warnings
- **Email Status**: ✅ Working with Resend API
- **File Uploads**: ✅ Working with proper validation
- **Domain**: ⏳ Requires verification for email delivery