import { QuizForm } from '@/schema/quiz'
import { QuestionsResponse, Question } from '@/types/Question'

export async function getQuestions(params: QuizForm): Promise<Question[]> {
    const res = await fetch(
        `https://opentdb.com/api.php?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type=${params.type}`
    )
    if (!res.ok) {
        throw new Error('Error whilst fetching questions')
    }
    const response = (await res.json() as QuestionsResponse)
    return response.results
}
