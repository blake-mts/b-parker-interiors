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
