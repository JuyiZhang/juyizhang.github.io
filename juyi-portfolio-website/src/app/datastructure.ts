export interface tableValue {
    title: string;
    caption?: string;
    descriptor?: string;
    date?: string;
    list?: string[];
}

export interface skills {
    title: string;
    mastery: number;
}

export interface categorizedSkills {
    title: string;
    items: skills[];
}