import { PoliticianData, ScoreCriteria } from "@/types";

export const getScoreGrade = (score: number, politician: PoliticianData, score_criteria: ScoreCriteria[]) => {
    if (score_criteria.length == 0) return '?';
    if (score > 30) return "A+";
    if (score > 24) return "A";
    if (score > 18) return "A-";
    if (score > 13) return "B+";
    if (score > 9) return "B";
    if (score > 5) return "B-";
    if (score > 2) return "C+";
    if (score > -1) return "C";
    if (score > -3) return "C-";
    if (score > -6) return "D+";
    if (score > -7) return "D";
    if (score > -16) return "D-";
    if (politician['last_name'] == 'McConnell') return "F-";
    return "F";
}