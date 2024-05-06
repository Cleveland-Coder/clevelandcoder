export interface Résumé {
    name: string;
    title: string;
    address: string;
    phone: string;
    email: string;
    sections: Section[];
}

export interface Section {
    title: string;
    items: Item[];
}

export interface Item {
    job_title: string;
    company: string;
    location: string;
    date: string;
    content: string[];
}
