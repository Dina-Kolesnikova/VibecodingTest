export interface Flashcard {
  id: number;
  category: string;
  spanish: string;
  english: string;
  quiz?: {
    type: 'multiple-choice' | 'fill-in-the-blank';
    options?: string[]; // For multiple-choice
  };
}

export const flashcards: Flashcard[] = [
  // Animals
  {
    id: 1,
    category: 'animals',
    spanish: 'el perro',
    english: 'the dog',
    quiz: {
      type: 'multiple-choice',
      options: ['the cat', 'the bird', 'the dog', 'the fish'],
    },
  },
  {
    id: 2,
    category: 'animals',
    spanish: 'el gato',
    english: 'the cat',
    quiz: {
      type: 'multiple-choice',
      options: ['the dog', 'the house', 'the cat', 'the bird'],
    },
  },
  {
    id: 3,
    category: 'animals',
    spanish: 'el pájaro',
    english: 'the bird',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    id: 10,
    category: 'animals',
    spanish: 'la jirafa',
    english: 'the giraffe',
    quiz: {
      type: 'multiple-choice',
      options: ['the zebra', 'the giraffe', 'the hippo', 'the rhino'],
    },
  },
  {
    id: 11,
    category: 'animals',
    spanish: 'el león',
    english: 'the lion',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    id: 12,
    category: 'animals',
    spanish: 'el elefante',
    english: 'the elephant',
    quiz: {
      type: 'multiple-choice',
      options: ['the elephant', 'the mouse', 'the squirrel', 'the bear'],
    },
  },
  // Food
  {
    id: 4,
    category: 'food',
    spanish: 'la manzana',
    english: 'the apple',
    quiz: {
      type: 'multiple-choice',
      options: ['the banana', 'the apple', 'the orange', 'the grape'],
    },
  },
  {
    id: 5,
    category: 'food',
    spanish: 'el pan',
    english: 'the bread',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    id: 6,
    category: 'food',
    spanish: 'el queso',
    english: 'the cheese',
    quiz: {
      type: 'multiple-choice',
      options: ['the milk', 'the butter', 'the cheese', 'the yogurt'],
    },
  },
  // Verbs
  {
    id: 7,
    category: 'verbs',
    spanish: 'correr',
    english: 'to run',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    id: 8,
    category: 'verbs',
    spanish: 'comer',
    english: 'to eat',
    quiz: {
      type: 'multiple-choice',
      options: ['to drink', 'to sleep', 'to eat', 'to read'],
    },
  },
  {
    id: 9,
    category: 'verbs',
    spanish: 'leer',
    english: 'to read',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
];

export const categories = ['animals', 'food', 'verbs']; 