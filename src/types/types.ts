export type Post = {
    id?: number;
    title: string;
    content: string;
    status: string;
    tags: Array<string>;
    [key: string]: any;
};

export type ApiPost = {
    id?: number;
    title: string;
    content: string;
    status: string;
    tags: Array<number>;
    [key: string]: any;
};

export type Headers = {
    'Content-Type': string;
    Authorization: string;
    [key: string]: string;
};

export type Partner = {
    id?: number;
    name: string;
    logo: string;
    url: string;
    level: string;
    project: string;
    [key: string]: any;
};

export type Personnel = {
    id?: number,
    name: string,
    title: string,
    alias: string,
    con_position: string,
    image: string,
    email_to: string,
    office_hours_start: string,
    office_hours_end: string,
    [key: string]: any;
};
