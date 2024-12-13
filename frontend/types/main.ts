export interface PoliticianData {
    first_name: string;
    last_name: string;
    active: string;
    voting: string;
    organization: string;
    candidacy: string;
    intelligence: string;
    judiciary: string;
    homelandsecurity: string;
    armedservices: string;
    weaponization: string;
    image: string;
    state: string;
    state_short: string;
    party: string;
    gender: string;
    twitter: string;
    bioguide: string;
    freedom: string;
    congressionalblack: string;
    congressionalprogressive: string;
    fourthamendment: string;
    phone: string;
    email: string;
    score_criteria: ScoreCriteria[];
    score?: number;
    [key: string]: any;
}

export interface ScoreCriteria {
    score: number;
    info: string;
    url: string;
}

export interface Scoring {
    score: number;
    grade: string;
    score_criteria: ScoreCriteria[];
}
