
export interface Repository{
    items: any[];
    name: string;
    fullname: string;
    owner: Owner;
    description: string;
    html_url: string;
    stars: string;
    forks: string;
    language: string;
}

export class Owner{
    avatar_url: string;
}
