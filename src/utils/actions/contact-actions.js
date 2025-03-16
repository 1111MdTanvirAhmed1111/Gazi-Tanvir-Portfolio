// app/actions/contactActions.js
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/utils/Prisma';

export async function submitContactForm(formData) {
  try {
    if (!formData || typeof formData.get !== 'function') {
      throw new Error('Invalid form data received');
    }

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name) {
      throw new Error('Name is required');
    }
    if (!email) {
      throw new Error('Email is required');
    }
    if (!message) {
      throw new Error('Message is required');
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      throw new Error('Invalid email format');
    }

    try {
      await prisma.$connect();
      console.log('Database connected successfully');

      await prisma.contact.create({
        data: {
          name,
          email,
          message,
        },
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Database error: ${dbError.message}`);
    } finally {
      await prisma.$disconnect();
    }

    // revalidatePath('/');
    
  } catch (error) {
    console.error('Detailed error in submitContactForm:', {
      error: error.message,
      stack: error.stack,
      formData: formData ? {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      } : 'No formData received',
    });
    throw new Error(error.message || 'Failed to submit contact form. Please try again.');
  }
}