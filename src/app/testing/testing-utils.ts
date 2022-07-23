import { SurveySubject } from '../survey/models/survey-subject.model';
import { Person } from '../survey/models/person.model';
import { Survey } from '../survey/models/survey.model';

export const surveySubjects: SurveySubject[] = [
  {
    id: 1,
    name: 'Limousin',
    sequence: 1,
    questions: [
      {
        id: 1,
        text: 'Wat vind je van de kleur?',
      },
      {
        id: 2,
        text: 'Wat vind je van de geur?',
      },
      {
        id: 3,
        text: 'Wat vind je van de smaak?',
      },
      {
        id: 4,
        text: 'Is de steak geaderd?',
      },
      {
        id: 5,
        text: 'Is de steak mals?',
      },
    ],
  },
  {
    id: 2,
    name: 'Holstein',
    sequence: 2,
    questions: [
      {
        id: 1,
        text: 'Wat vind je van de kleur?',
      },
      {
        id: 2,
        text: 'Wat vind je van de geur?',
      },
      {
        id: 3,
        text: 'Wat vind je van de smaak?',
      },
      {
        id: 4,
        text: 'Is de steak geaderd?',
      },
      {
        id: 5,
        text: 'Is de steak mals?',
      },
    ],
  },
];

export const person: Person = {
  id: 1,
  name: 'sven',
};

export const surveys: Survey[] = [
  {
    id: 22,
    person: {
      id: 111,
      name: 'create person',
    },
    scores: [
      {
        id: 110,
        value: 5,
        surveySubject: {
          id: 1,
          name: 'Limousin',
          sequence: 1,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 2,
          text: 'Wat vind je van de geur?',
        },
      },
      {
        id: 111,
        value: 4,
        surveySubject: {
          id: 1,
          name: 'Limousin',
          sequence: 1,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 3,
          text: 'Wat vind je van de smaak?',
        },
      },
    ],
  },
  {
    id: 23,
    person: {
      id: 115,
      name: 'sven',
    },
    scores: [
      {
        id: 116,
        value: 5,
        surveySubject: {
          id: 1,
          name: 'Limousin',
          sequence: 1,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 5,
          text: 'Is de steak mals?',
        },
      },
      {
        id: 115,
        value: 4,
        surveySubject: {
          id: 1,
          name: 'Limousin',
          sequence: 1,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 4,
          text: 'Is de steak geaderd?',
        },
      },
      {
        id: 114,
        value: 3,
        surveySubject: {
          id: 1,
          name: 'Limousin',
          sequence: 1,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 3,
          text: 'Wat vind je van de smaak?',
        },
      },
      {
        id: 113,
        value: 2,
        surveySubject: {
          id: 1,
          name: 'Limousin',
          sequence: 1,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 2,
          text: 'Wat vind je van de geur?',
        },
      },
      {
        id: 112,
        value: 1,
        surveySubject: {
          id: 1,
          name: 'Limousin',
          sequence: 1,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 1,
          text: 'Wat vind je van de kleur?',
        },
      },
      {
        id: 121,
        value: 1,
        surveySubject: {
          id: 2,
          name: 'Holstein',
          sequence: 2,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 5,
          text: 'Is de steak mals?',
        },
      },
      {
        id: 120,
        value: 2,
        surveySubject: {
          id: 2,
          name: 'Holstein',
          sequence: 2,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 4,
          text: 'Is de steak geaderd?',
        },
      },
      {
        id: 119,
        value: 3,
        surveySubject: {
          id: 2,
          name: 'Holstein',
          sequence: 2,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 3,
          text: 'Wat vind je van de smaak?',
        },
      },
      {
        id: 118,
        value: 4,
        surveySubject: {
          id: 2,
          name: 'Holstein',
          sequence: 2,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 2,
          text: 'Wat vind je van de geur?',
        },
      },
      {
        id: 117,
        value: 5,
        surveySubject: {
          id: 2,
          name: 'Holstein',
          sequence: 2,
          questions: [
            {
              id: 1,
              text: 'Wat vind je van de kleur?',
            },
            {
              id: 2,
              text: 'Wat vind je van de geur?',
            },
            {
              id: 3,
              text: 'Wat vind je van de smaak?',
            },
            {
              id: 4,
              text: 'Is de steak geaderd?',
            },
            {
              id: 5,
              text: 'Is de steak mals?',
            },
          ],
        },
        question: {
          id: 1,
          text: 'Wat vind je van de kleur?',
        },
      },
    ],
  },
];
