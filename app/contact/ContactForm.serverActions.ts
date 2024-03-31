'use server';

import { captureException } from '@sentry/nextjs';
import { Fields } from './ContactForm.validations';

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const url = `https://api.mailgun.net/v3/${domain}/messages`;

export async function submitContactForm(fields: Fields) {
    try {
        throw Error('ERRRORORRORO');
        Fields.parse(fields);

        const form = new FormData();

        const formValues = {
            from: `Website Contact Form <mailgun@${domain}>`,
            to: 'blake@masonts.com',
            subject: 'Contact Form Submission',
            html: `
                Name: ${fields.NAME}
                <br/>
                Email: ${fields.EMAIL}
                <br/>
                Phone: ${fields.PHONE}
                <br/>
                Location: ${fields.LOCATION}
                <br/>
                More: ${fields.MORE}
            `,
        };

        for (const entry of Object.entries(formValues)) {
            form.append(...entry);
        }

        const mailgunResponse = await fetch(url, {
            method: 'POST',
            body: form,
            headers: {
                Authorization:
                    'Basic ' + Buffer.from('api:' + apiKey).toString('base64'),
            },
        });

        if (mailgunResponse.status !== 200) {
            const errorMessage = await mailgunResponse.text();
            throw Error(`Mailgun error: ${errorMessage}`);
        }

        return;
    } catch (error) {
        try {
            console.log(captureException);
            console.log(JSON.stringify(error), 'logalog1');
            const testMe = captureException(error);
            console.log(testMe, 'logalog');
        } catch (error) {
            console.log(error);
        }
        throw error;
    }
}
