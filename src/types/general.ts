export interface Post {
    id: string;
    img?: string;
    createdAt: string;
    title: string;
    body: string;
    slug: string;
}

export interface ParamsObject<T extends string> {
    params: {
        // eslint-disable-next-line no-unused-vars
        [K in T]: string;
    };
}