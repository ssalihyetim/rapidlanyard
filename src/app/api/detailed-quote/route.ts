import { NextRequest, NextResponse } from 'next/server';
import { sendDetailedQuoteEmail, sendCustomerConfirmation } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const company = formData.get('company') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const product = formData.get('product') as string;
    const quantity = formData.get('quantity') as string;
    const delivery = formData.get('delivery') as string;
    const timeline = formData.get('timeline') as string;
    const message = formData.get('message') as string;
    
    // Validate required fields
    if (!company || !name || !email || !product || !quantity || !delivery) {
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
    
    const fileFields = formData.getAll('logoUpload');
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
      company,
      name,
      email,
      phone: phone || undefined,
      product,
      quantity,
      delivery,
      timeline: timeline || undefined,
      message: message || undefined,
      files: files.length > 0 ? files : undefined
    };

    // Send emails
    const businessEmailResult = await sendDetailedQuoteEmail(emailData);
    const customerEmailResult = await sendCustomerConfirmation(email, name, true);

    if (!businessEmailResult.success) {
      console.error('Business email failed:', businessEmailResult.error);
      return NextResponse.json(
        { error: 'Failed to send quote request. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    // Customer confirmation failure shouldn't block the process
    if (!customerEmailResult.success) {
      console.warn('Customer confirmation failed:', customerEmailResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Detailed quote request sent successfully! You should receive a response within 2 business hours.'
    });

  } catch (error) {
    console.error('Detailed quote API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}