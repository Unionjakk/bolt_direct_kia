
import { EmailTemplate } from './types.ts';

export async function sendEmails(
  sendGridApiKey: string,
  customerEmail: EmailTemplate,
  internalEmail: EmailTemplate
): Promise<void> {
  const emailPromises = [
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendGridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerEmail),
    }),
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendGridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(internalEmail),
    }),
  ];

  const emailResults = await Promise.allSettled(emailPromises);
  
  // Log email results but don't fail the request if emails fail
  emailResults.forEach((result, index) => {
    const emailType = index === 0 ? 'customer' : 'internal';
    if (result.status === 'fulfilled') {
      console.log(`${emailType} email sent successfully`);
    } else {
      console.error(`Failed to send ${emailType} email:`, result.reason);
    }
  });
}
