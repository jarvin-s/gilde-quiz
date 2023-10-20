export type QuestionsResponse = {
  // results: Question[]; // An array of trivia questions
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type Question = {
  question: string; // The question text
  correct_answer: string; // The correct answer
  incorrect_answers: string[]; // An array of incorrect answers
  // Other properties specific to the API response
};
