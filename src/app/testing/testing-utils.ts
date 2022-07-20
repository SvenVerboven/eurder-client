import { SurveySubject } from '../survey/models/survey-subject.model';
import { Person } from '../survey/models/person.model';

export const surveySubjects: SurveySubject[] = [
  {
    id: 1,
    name: 'Limousin',
    sequence: 1,
    questions: [
      {
        id: 1,
        text: 'Wat vind je van de kleur?',
        answers: [
          {
            id: 1,
            text: 'te donker',
            sequence: 1,
          },
          {
            id: 2,
            text: 'te licht',
            sequence: 2,
          },
          {
            id: 3,
            text: 'mooi gekleurd',
            sequence: 3,
          },
        ],
      },
      {
        id: 2,
        text: 'Wat vind je van de geur?',
        answers: [
          {
            id: 4,
            text: 'ruikt naar niets',
            sequence: 1,
          },
          {
            id: 5,
            text: 'ruikt te sterk',
            sequence: 2,
          },
          {
            id: 6,
            text: 'ruikt naar een lekkere steak',
            sequence: 3,
          },
        ],
      },
      {
        id: 3,
        text: 'Wat vind je van de smaak?',
        answers: [
          {
            id: 7,
            text: 'smaakt niet lekker',
            sequence: 1,
          },
          {
            id: 8,
            text: 'smaakt ok',
            sequence: 2,
          },
          {
            id: 9,
            text: 'smaakt super lekker',
            sequence: 3,
          },
        ],
      },
      {
        id: 4,
        text: 'Is de steak geaderd?',
        answers: [
          {
            id: 10,
            text: 'te weinig geaderd',
            sequence: 1,
          },
          {
            id: 11,
            text: 'te veel geaderd',
            sequence: 2,
          },
          {
            id: 12,
            text: 'perfect geaderd',
            sequence: 3,
          },
        ],
      },
      {
        id: 5,
        text: 'Is de steak mals?',
        answers: [
          {
            id: 13,
            text: 'te mals',
            sequence: 1,
          },
          {
            id: 14,
            text: 'te taai',
            sequence: 2,
          },
          {
            id: 15,
            text: 'perfect mals',
            sequence: 3,
          },
        ],
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
        answers: [
          {
            id: 1,
            text: 'te donker',
            sequence: 1,
          },
          {
            id: 2,
            text: 'te licht',
            sequence: 2,
          },
          {
            id: 3,
            text: 'mooi gekleurd',
            sequence: 3,
          },
        ],
      },
      {
        id: 2,
        text: 'Wat vind je van de geur?',
        answers: [
          {
            id: 4,
            text: 'ruikt naar niets',
            sequence: 1,
          },
          {
            id: 5,
            text: 'ruikt te sterk',
            sequence: 2,
          },
          {
            id: 6,
            text: 'ruikt naar een lekkere steak',
            sequence: 3,
          },
        ],
      },
      {
        id: 3,
        text: 'Wat vind je van de smaak?',
        answers: [
          {
            id: 7,
            text: 'smaakt niet lekker',
            sequence: 1,
          },
          {
            id: 8,
            text: 'smaakt ok',
            sequence: 2,
          },
          {
            id: 9,
            text: 'smaakt super lekker',
            sequence: 3,
          },
        ],
      },
      {
        id: 4,
        text: 'Is de steak geaderd?',
        answers: [
          {
            id: 10,
            text: 'te weinig geaderd',
            sequence: 1,
          },
          {
            id: 11,
            text: 'te veel geaderd',
            sequence: 2,
          },
          {
            id: 12,
            text: 'perfect geaderd',
            sequence: 3,
          },
        ],
      },
      {
        id: 5,
        text: 'Is de steak mals?',
        answers: [
          {
            id: 13,
            text: 'te mals',
            sequence: 1,
          },
          {
            id: 14,
            text: 'te taai',
            sequence: 2,
          },
          {
            id: 15,
            text: 'perfect mals',
            sequence: 3,
          },
        ],
      },
    ],
  },
];

export const person: Person = {
  id: 1,
  name: 'sven',
};
