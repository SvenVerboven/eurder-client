import { Survey } from '../models/survey.model';
import { Score } from '../models/score.model';

const DEFAULT_COLORS = [
  '#ec4899',
  '#eab308',
  '#06b6d4',
  '#ff3d32',
  '#14b8a6',
  '#3b82f6',
  '#22c55e',
  '#6366f1',
  '#f97316',
  '#a855f7',
];

export function mapToDoughnutData(surveys: Survey[], index: number = 0): any {
  if (!surveys) {
    return {};
  }
  let doughnutDataMap = new Map<string, number>();
  if (index === 0) {
    surveys.forEach((survey: Survey) => {
      survey.scores.forEach((score: Score) => {
        let surveySubjectName = score.surveySubject.name;
        let scoreValue = score.value;
        if (doughnutDataMap.has(surveySubjectName)) {
          doughnutDataMap.set(surveySubjectName, doughnutDataMap.get(surveySubjectName) + scoreValue);
        } else {
          doughnutDataMap.set(surveySubjectName, scoreValue);
        }
      });
    });
  } else {
    surveys.forEach((survey: Survey) => {
      survey.scores
        .filter((score: Score) => score.question.id === index)
        .forEach((score: Score) => {
          let surveySubjectName = score.surveySubject.name;
          let scoreValue = score.value;
          if (doughnutDataMap.has(surveySubjectName)) {
            doughnutDataMap.set(surveySubjectName, doughnutDataMap.get(surveySubjectName) + scoreValue);
          } else {
            doughnutDataMap.set(surveySubjectName, scoreValue);
          }
        });
    });
  }
  let colorArray = getColorArray(doughnutDataMap);
  return {
    labels: Array.from(doughnutDataMap.keys()),
    datasets: [
      {
        data: Array.from(doughnutDataMap.values()),
        backgroundColor: colorArray,
        hoverBackgroundColor: colorArray,
      },
    ],
  };
}

function getColorArray(map: Map<string, number>): string[] {
  return DEFAULT_COLORS.slice(0, map.size);
}
