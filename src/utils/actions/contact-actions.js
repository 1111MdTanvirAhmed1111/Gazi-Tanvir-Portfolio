// app/actions/contactActions.js
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/utils/Prisma';

export async function submitContactForm(formData) {


    // Input Validation
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

  
    //  DB Operation
    const createdMsg =   await prisma.contact.create({
        data: {
          name,
          email,
          message,
        },
      });

      if(createdMsg){
        redirect('/thank-you')
      }
else{
  redirect('not-found')
}
   
    


}