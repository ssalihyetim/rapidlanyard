import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export interface SimpleQuoteData {
  name: string;
  email: string;
  quantity: string;
  description: string;
  files?: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }>;
}

export interface DetailedQuoteData {
  company: string;
  name: string;
  email: string;
  phone?: string;
  product: string;
  quantity: string;
  delivery: string;
  timeline?: string;
  message?: string;
  files?: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }>;
}

// Generate HTML email template for simple quote
const generateSimpleQuoteHTML = (data: SimpleQuoteData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background-color: #14b8a6; color: white; padding: 20px; margin: -30px -30px 30px -30px; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #6b7280; margin-left: 10px; }
            .files { background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px; }
            .urgent { background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 15px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚨 New Simple Quote Request</h1>
                <p style="margin: 5px 0 0 0;">RapidLanyard - Immediate Action Required</p>
            </div>
            
            <div class="urgent">
                <strong>⏰ Response needed within 2 hours!</strong><br>
                Customer expects quote by: ${new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleString()}
            </div>

            <div class="field">
                <span class="label">Customer Name:</span>
                <span class="value">${data.name}</span>
            </div>
            
            <div class="field">
                <span class="label">Email:</span>
                <span class="value">${data.email}</span>
            </div>
            
            <div class="field">
                <span class="label">Quantity:</span>
                <span class="value">${data.quantity} pieces</span>
            </div>
            
            <div class="field">
                <span class="label">Project Description:</span>
                <div class="value" style="margin-top: 10px; line-height: 1.5;">${data.description}</div>
            </div>
            
            ${data.files && data.files.length > 0 ? `
            <div class="field">
                <span class="label">Attached Files:</span>
                <div class="files">
                    ${data.files.map(file => `📎 ${file.filename}`).join('<br>')}
                </div>
            </div>
            ` : '<p><strong>⚠️ No logo files attached</strong> - May need to follow up for design files</p>'}
            
            <div style="margin-top: 30px; padding: 20px; background-color: #14b8a6; color: white; border-radius: 5px; text-align: center;">
                <strong>Next Steps:</strong><br>
                1. Review customer requirements<br>
                2. Prepare quote with 3-day delivery pricing<br>
                3. Respond within 2 hours<br>
                4. Send quote via email and WhatsApp backup
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: #6b7280;">
                <p>Submitted: ${new Date().toLocaleString()}</p>
                <p>Form Type: Simple Quote Request</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Generate HTML email template for detailed quote
const generateDetailedQuoteHTML = (data: DetailedQuoteData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background-color: #0d9488; color: white; padding: 20px; margin: -30px -30px 30px -30px; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .section { margin-bottom: 25px; }
            .section h3 { color: #0d9488; border-bottom: 2px solid #14b8a6; padding-bottom: 5px; }
            .field { margin-bottom: 10px; }
            .label { font-weight: bold; color: #374151; min-width: 120px; display: inline-block; }
            .value { color: #6b7280; }
            .files { background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px; }
            .priority { background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 15px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📋 Detailed Quote Request</h1>
                <p style="margin: 5px 0 0 0;">RapidLanyard - Business Quote</p>
            </div>
            
            <div class="priority">
                <strong>🎯 B2B Customer - Priority Response Required</strong><br>
                Target response: Within 2 business hours
            </div>

            <div class="section">
                <h3>🏢 Company Information</h3>
                <div class="field">
                    <span class="label">Company:</span>
                    <span class="value">${data.company}</span>
                </div>
                <div class="field">
                    <span class="label">Contact:</span>
                    <span class="value">${data.name}</span>
                </div>
                <div class="field">
                    <span class="label">Email:</span>
                    <span class="value">${data.email}</span>
                </div>
                <div class="field">
                    <span class="label">Phone:</span>
                    <span class="value">${data.phone || 'Not provided'}</span>
                </div>
            </div>

            <div class="section">
                <h3>📦 Product Requirements</h3>
                <div class="field">
                    <span class="label">Product Type:</span>
                    <span class="value">${data.product}</span>
                </div>
                <div class="field">
                    <span class="label">Quantity:</span>
                    <span class="value">${data.quantity} pieces</span>
                </div>
                <div class="field">
                    <span class="label">Delivery to:</span>
                    <span class="value">${data.delivery}</span>
                </div>
                <div class="field">
                    <span class="label">Timeline:</span>
                    <span class="value">${data.timeline || 'Not specified'}</span>
                </div>
            </div>

            ${data.message ? `
            <div class="section">
                <h3>💬 Additional Details</h3>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; line-height: 1.5;">
                    ${data.message}
                </div>
            </div>
            ` : ''}
            
            ${data.files && data.files.length > 0 ? `
            <div class="section">
                <h3>📎 Attached Files</h3>
                <div class="files">
                    ${data.files.map(file => `📎 ${file.filename} (${(file.content.length / 1024).toFixed(1)}KB)`).join('<br>')}
                </div>
            </div>
            ` : '<div class="section"><strong>⚠️ No design files attached</strong> - Follow up for logo/artwork</div>'}
            
            <div style="margin-top: 30px; padding: 20px; background-color: #0d9488; color: white; border-radius: 5px;">
                <strong>📋 Quote Preparation Checklist:</strong><br>
                ☐ Calculate pricing for ${data.quantity} pieces<br>
                ☐ Confirm 3-day delivery to ${data.delivery}<br>
                ☐ Check logo/artwork requirements<br>
                ☐ Prepare detailed quote PDF<br>
                ☐ Send response within 2 hours<br>
                ☐ Follow up via WhatsApp if urgent
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: #6b7280;">
                <p>Submitted: ${new Date().toLocaleString()}</p>
                <p>Form Type: Detailed Quote Request</p>
                <p><strong>Company:</strong> ${data.company}</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Send simple quote email using Resend
export const sendSimpleQuoteEmail = async (data: SimpleQuoteData): Promise<{ success: boolean; error?: string }> => {
  try {
    console.log('📧 Starting simple quote email send with Resend...');
    console.log('📋 Quote data:', {
      name: data.name,
      email: data.email,
      quantity: data.quantity,
      filesCount: data.files?.length || 0
    });

    // Prepare attachments for Resend format
    const attachments = data.files?.map(file => ({
      filename: file.filename,
      content: file.content,
    })) || [];

    console.log('📤 Sending email with Resend...');
    
    const result = await resend.emails.send({
      from: 'RapidLanyard Quote System <salih@talepgetir.com>',
      to: ['salih@talepgetir.com'],
      reply_to: data.email, // Customer can reply directly
      subject: `🚨 URGENT: Simple Quote Request - ${data.name} - ${data.quantity} pcs`,
      html: generateSimpleQuoteHTML(data),
      attachments: attachments
    });

    console.log('✅ Email sent successfully with Resend:', result.data?.id);
    
    return { success: true };
  } catch (error) {
    console.error('❌ Error sending simple quote email with Resend:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Send detailed quote email using Resend
export const sendDetailedQuoteEmail = async (data: DetailedQuoteData): Promise<{ success: boolean; error?: string }> => {
  try {
    console.log('📧 Starting detailed quote email send with Resend...');

    // Prepare attachments for Resend format
    const attachments = data.files?.map(file => ({
      filename: file.filename,
      content: file.content,
    })) || [];

    const result = await resend.emails.send({
      from: 'RapidLanyard Quote System <salih@talepgetir.com>',
      to: ['salih@talepgetir.com'],
      reply_to: data.email, // Customer can reply directly
      subject: `📋 B2B Quote Request - ${data.company} - ${data.quantity} pcs ${data.product}`,
      html: generateDetailedQuoteHTML(data),
      attachments: attachments
    });

    console.log('✅ Detailed email sent successfully with Resend:', result.data?.id);
    
    return { success: true };
  } catch (error) {
    console.error('❌ Error sending detailed quote email with Resend:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Send customer confirmation email using Resend
export const sendCustomerConfirmation = async (
  customerEmail: string, 
  customerName: string, 
  isDetailed = false
): Promise<{ success: boolean; error?: string }> => {
  try {
    console.log('📧 Sending customer confirmation with Resend...');
    
    const confirmationHTML = `
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
              .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; }
              .header { background-color: #14b8a6; color: white; padding: 20px; margin: -30px -30px 30px -30px; border-radius: 10px 10px 0 0; text-align: center; }
              .content { line-height: 1.6; color: #374151; }
              .highlight { background-color: #ecfccb; padding: 15px; border-radius: 5px; margin: 20px 0; }
              .button { background-color: #14b8a6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>✅ Quote Request Received</h1>
                  <p style="margin: 0;">RapidLanyard - 3 Day Delivery</p>
              </div>
              
              <div class="content">
                  <p>Dear ${customerName},</p>
                  
                  <p>Thank you for your ${isDetailed ? 'detailed' : 'simple'} quote request! We've received your inquiry and our team is already working on your custom lanyard quote.</p>
                  
                  <div class="highlight">
                      <strong>⏱️ What happens next:</strong><br>
                      • Our team will review your requirements within <strong>2 hours</strong><br>
                      • You'll receive a detailed quote via email<br>
                      • We guarantee <strong>3-day delivery</strong> to EU & US<br>
                      • Any questions? We're here to help!
                  </div>
                  
                  <p>For immediate assistance or urgent requests, contact us directly:</p>
                  
                  <p>
                      <a href="https://wa.me/905455812613" class="button">📱 WhatsApp: +90 545 581 26 13</a><br>
                      <a href="mailto:salih@talepgetir.com" class="button">📧 Email: salih@talepgetir.com</a>
                  </p>
                  
                  <p>Best regards,<br>
                  <strong>RapidLanyard Team</strong><br>
                  Factory-Direct Custom Lanyards</p>
              </div>
          </div>
      </body>
      </html>
    `;
    
    const result = await resend.emails.send({
      from: 'RapidLanyard <salih@talepgetir.com>',
      to: [customerEmail],
      subject: '✅ Quote Request Received - Response within 2 hours | RapidLanyard',
      html: confirmationHTML
    });

    console.log('✅ Customer confirmation sent successfully with Resend:', result.data?.id);
    
    return { success: true };
  } catch (error) {
    console.error('❌ Error sending customer confirmation with Resend:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};