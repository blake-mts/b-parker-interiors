'use server';

import { ContactFormSubmission, SUCCESS_RESPONSE_TYPE } from './ContactForm.types';
import { Fields } from './ContactForm.validations';
import { ResponseType } from './ContactForm.types';

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const url = `https://api.mailgun.net/v3/${domain}/messages`;

export async function submitContactForm(formSubmission: ContactFormSubmission): Promise<{
    responseType: ResponseType;
}> {
    const { fields, token } = formSubmission;

    const recaptchaFormData = new URLSearchParams();
    recaptchaFormData.append('response', token);
    recaptchaFormData.append('secret', process.env.RECAPTCHA_SECRET_KEY);

    const verifyTokenResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        body: recaptchaFormData,
    });

    const parsedTokenResponse: { success: boolean } = await verifyTokenResponse.json();

    if (!parsedTokenResponse.success) {
        throw Error(JSON.stringify(parsedTokenResponse));
    }

    Fields.parse(fields);

    const form = new FormData();

    const formValues = {
        from: `Website Contact Form <mailgun@${domain}>`,
        to: 'bailey@bparkerinteriors.com',
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
            Authorization: 'Basic ' + Buffer.from('api:' + apiKey).toString('base64'),
        },
    });

    if (mailgunResponse.status !== 200) {
        const errorMessage = await mailgunResponse.text();
        throw Error(`Mailgun error: ${errorMessage}`);
    }

    return {
        responseType: SUCCESS_RESPONSE_TYPE,
    };
}
