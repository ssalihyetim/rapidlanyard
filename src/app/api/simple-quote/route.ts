import { NextRequest, NextResponse } from 'next/server';
import { sendSimpleQuoteEmail, sendCustomerConfirmation } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Simple quote API called');
    console.log('🌍 Environment variables check:', {
      RESEND_API_KEY_EXISTS: !!process.env.RESEND_API_KEY,
      RESEND_API_KEY_LENGTH: process.env.RESEND_API_KEY?.length || 0,
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT, 
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS_LENGTH: process.env.SMTP_PASS?.length || 0,
      SMTP_PASS_EXISTS: !!process.env.SMTP_PASS
    });

    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const quantity = formData.get('quantity') as string;
    const description = formData.get('description') as string;
    
    console.log('📝 Form data received:', {
      name: name || 'MISSING',
      email: email || 'MISSING', 
      quantity: quantity || 'MISSING',
      descriptionLength: description?.length || 0
    });
    
    // Validate required fields
    if (!name || !email || !quantity || !description) {
      console.log('❌ Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Process file attachments
    const files: Array<{
      filename: string;
      content: Buffer;
      contentType: string;
    }> = [];
    
    const fileFields = formData.getAll('files');
    for (const field of fileFields) {
      if (field instanceof File && field.size > 0) {
        const buffer = Buffer.from(await field.arrayBuffer());
        files.push({
          filename: field.name,
          content: buffer,
          contentType: field.type
        });
      }
    }

    // Prepare email data
    const emailData = {
      name,
      email,
      quantity,
      description,
      files: files.length > 0 ? files : undefined
    };

    console.log('📧 Starting email sending process...');
    
    // Send emails
    console.log('📤 Sending business email...');
    const businessEmailResult = await sendSimpleQuoteEmail(emailData);
    console.log('📤 Business email result:', businessEmailResult);
    
    console.log('📤 Sending customer confirmation...');
    const customerEmailResult = await sendCustomerConfirmation(email, name, false);
    console.log('📤 Customer confirmation result:', customerEmailResult);

    if (!businessEmailResult.success) {
      console.error('❌ Business email failed:', businessEmailResult.error);
      return NextResponse.json(
        { error: 'Failed to send quote request. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    // Customer confirmation failure shouldn't block the process
    if (!customerEmailResult.success) {
      console.warn('⚠️ Customer confirmation failed:', customerEmailResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Quote request sent successfully! You should receive a response within 2 hours.'
    });

  } catch (error) {
    console.error('Simple quote API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}