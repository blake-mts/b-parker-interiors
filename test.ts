export const BASE_URL = 'https://bparkerinteriors.com';

export enum PAGE {
    home = 'home',
    portfolio = 'portfolio',
    about = 'about',
    contact = 'contact',
}

interface Page {
    route: string;
    title: string;
}

export const PAGES: {
    [key in PAGE]: Page;
} = {
    [PAGE.home]: { route: '/', title: 'HOME' },
    [PAGE.portfolio]: { route: '/portfolio', title: 'PORTFOLIO' },
    [PAGE.about]: { route: '/about', title: 'ABOUT US' },
    [PAGE.contact]: { route: '/contact', title: 'CONTACT' },
} as const;

export const PAGES_ORDERED: Page[] = Object.values(PAGES);
console.log(
    PAGES_ORDERED.map((page) => ({
        url: new URL(page.route, BASE_URL).href,
        lastModified: new Date(),
    }))
);
