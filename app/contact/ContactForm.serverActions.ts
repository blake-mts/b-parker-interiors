'use server';

import { Fields } from './ContactForm.validations';

const errorResponse = { error: true };
const successResponse = { error: false };

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const url = `https://api.mailgun.net/v3/${domain}/messages`;

export async function submitContactForm(fields: Fields) {
    try {
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

        console.log(mailgunResponse);

        const json = await mailgunResponse.json();

        if (mailgunResponse.status !== 200) {
            throw Error(json);
        }

        throw Error('test error');

        return successResponse;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        return errorResponse;
    }
}
