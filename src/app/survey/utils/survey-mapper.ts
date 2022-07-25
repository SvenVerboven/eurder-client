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

export function mapToDoughnutData(surveys: Survey[]): any {
  if (!surveys) {
    return {};
  }
  let doughnutDataMap = new Map<string, number>();
  surveys.forEach((survey: Survey) => {
    survey.scores.forEach((score: Score) => {
      let surveySubjectName = score.surveySubject.name;
      console.log(surveySubjectName);
      let scoreValue = score.value;
      console.log(scoreValue);
      if (doughnutDataMap.has(surveySubjectName)) {
        console.log('key exists');
        doughnutDataMap.set(surveySubjectName, doughnutDataMap.get(surveySubjectName) + scoreValue);
        console.log(`new value: ${doughnutDataMap.get(surveySubjectName)}`);
      } else {
        console.log('key does not exist');
        doughnutDataMap.set(surveySubjectName, scoreValue);
      }
    });
  });
  console.log(doughnutDataMap);
  let colorArray = getColorArray(doughnutDataMap);
  let any = {
    labels: Array.from(doughnutDataMap.keys()),
    datasets: [
      {
        data: Array.from(doughnutDataMap.values()),
        backgroundColor: colorArray,
        hoverBackgroundColor: colorArray,
      },
    ],
  };
  console.log(any);
  return any;
}

function getColorArray(map: Map<string, number>): string[] {
  return DEFAULT_COLORS.slice(0, map.size);
}
