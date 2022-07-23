import { Survey } from '../models/survey.model';
import { Score } from '../models/score.model';

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
  let any = {
    labels: Array.from(doughnutDataMap.keys()),
    datasets: [
      {
        data: Array.from(doughnutDataMap.values()),
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };
  console.log(any);
  return any;
}
