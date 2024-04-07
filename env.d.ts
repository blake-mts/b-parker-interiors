declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
        RECAPTCHA_SECRET_KEY: string;
        MAILGUN_API_KEY: string;
        MAILGUN_DOMAIN: string;
    }
}
