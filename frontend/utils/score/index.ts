import { PoliticianData, ScoreCriteria, Scoring } from "@/types";
import { getScoreGrade } from "./get-grade";
import { Congress } from "./congress";

export const doScore = (politician: PoliticianData): Scoring => {
    let totalScore: number = 0;
    const score_criteria: ScoreCriteria[] = [];

    for (const iter in Congress) {
        const congressData = Congress[iter as keyof typeof Congress];
        congressData.rules.forEach(data => {
            const key: string = data.key;
            let score:number, info: string, url: string;
            data.scoring.forEach(current => {
                if (politician[key] === current.value) {
                    score = current.score;
                    if (data.url === 'X') url = current.url;
                    else url = data.url;
                    if (data.info === 'X') info = current.info;
                    else {
                        if (current.hasOwnProperty('addText')) info = current.addText + data.info;
                        else info = data.info;
                    }
                    score_criteria.push({
                        score, info, url
                    });
                    totalScore += score;
                }
            });
        });
    }

    return {
        score: totalScore,
        grade: getScoreGrade(totalScore, politician, score_criteria),
        score_criteria: score_criteria
    }
}
