import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  try {
        // Parse the JSON body from the incoming request
        const body = await req.json();
        const { email } = body;

         // Validate the extracted data
        if (!email) {
            // return new Response(
            // JSON.stringify({ error: 'Invalid data. "email" is required.' }),
            // { status: 400, headers: { 'Content-Type': 'application/json' } }
            // );
            throw new Error('Invalid data. "email" is required.');
        }


    const { data, error } = await resend.emails.send({
      from: 'GoBoolean Team <updates@goboolean.in>',
      to: [`${email}`],
      subject: 'Welcome to GoBoolean',
      react: EmailTemplate(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 }, );
    }

    if(data) {
        console.log("Email sent successfully", data);
    }

    // return Response.json({ message: 'Email sent successfully' }, { status: 200 });
    return Response.json({ data: email }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
