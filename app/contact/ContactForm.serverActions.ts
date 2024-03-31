'use server';

import { Fields } from './ContactForm.validations';

const errorResponse = { error: true };
const successResponse = { error: false };

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const url = `https://api.mailgun.net/v3/${domain}/messages`;

export async function submitContactForm(fields: Fields) {
    try {
        const validation = Fields.safeParse(fields);

        if (!validation.success) {
            console.log(fields);
            console.log('fields validation failure\n\n', validation.error);
            return errorResponse;
        }

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

        const json = await mailgunResponse.json();

        if (mailgunResponse.status !== 200) {
            console.log(json);
            return errorResponse;
        }

        return successResponse;
    } catch (error) {
        console.log(error);
        return errorResponse;
    }
}
