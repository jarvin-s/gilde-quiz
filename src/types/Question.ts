export type QuestionsResponse = {
  // results: Question[]; // An array of trivia questions
  question: string
  correct_answer: string
  incorrect_answers: string[]
}