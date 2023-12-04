import QuizGame from '@/components/Quiz/QuizGame'
import { getServerSession } from 'next-auth'
import { redirect, useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getQuestions } from '../data/questions'
import React from 'react'
import { QuizForm } from '@/schema/quiz'

const Game = async () => {
    const session = await getServerSession()

    if (!session?.user) {
        redirect('/')
    }

    const params = useSearchParams()
    const parameters: QuizForm = {
        category: params.get('category') || '',
        difficulty: params.get('difficulty') || '',
        type: params.get('type') || '',
        amount: params.get('amount') || '',
    }

    const { data, error } = useQuery({
        queryKey: ['question', parameters],
        queryFn: async () => {
            const data = await getQuestions(parameters)
            return data
        },
    })

    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [correctAnswer, setCorrectAnswer] = React.useState(0)

    return (
        <>
            <QuizGame
                correctAnswer={correctAnswer}
                currentQuestion={currentQuestion}
                totalQuestions={data.length}
                question={data[currentQuestion]}
                onNext={(isCorrect) => {}}
            />
        </>
    )
}

export default Game
