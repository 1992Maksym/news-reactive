export interface INews {
    author: string;
    category: string[];
    title: string;
    url: string;
    published: string;
    language: string;
    image: string;
    id: number;
    description: string;
}

export interface FetchFunc<T,P>{
    (params?: P): Promise<T>
}
export interface UseFetchResult<T>{
    data: T | undefined | null,
    error: Error | null
}
export interface ParamsType<T,P>{
    page_number: T,
    page_size: T,
    category?: P | null,
    keywords?: P | null,
}

export type KeyWords = string | number | readonly string[] | undefined
export type ArrowClick = React.MouseEventHandler<HTMLButtonElement> | undefined

