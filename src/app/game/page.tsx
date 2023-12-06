'use client'

import QuizGame from '@/components/Quiz/QuizGame'
import { getServerSession } from 'next-auth'
import { redirect, useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getQuestions } from '../data/questions'
import React from 'react'
import { QuizForm } from '@/schema/quiz'
import { useAppDispatch } from '../store'
import {
    increaseTotalQuestionsAnswered,
    increaseTotalQuestionsAnsweredCorrectly,
} from '../store/quiz/slice'

export default function Game() {
    // const session = await getServerSession()

    // if (!session?.user) {
    //     redirect('/')
    // }
    const appDispatch = useAppDispatch()

    const params = useSearchParams()
    const parameters: QuizForm = {
        category: params.get('category') || '',
        difficulty: params.get('difficulty') || '',
        type: params.get('type') || '',
        amount: params.get('amount') || '',
    }

    const { data, error } = useQuery({
        queryKey: ['questions', parameters],
        queryFn: async () => {
            const data = await getQuestions(parameters)
            return data
        },
    })

    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [correctAnswer, setCorrectAnswer] = React.useState(0)

    return (
        <>
            <div>
                <QuizGame
                    correctAnswer={correctAnswer}
                    currentQuestion={currentQuestion}
                    totalQuestions={data.length}
                    question={data[currentQuestion]}
                    onNext={(isCorrect) => {
                        if (isCorrect) {
                            setCorrectAnswer(correctAnswer + 1)
                            appDispatch(
                                increaseTotalQuestionsAnsweredCorrectly()
                            )
                        }
                        setCurrentQuestion(currentQuestion + 1)
                        appDispatch(increaseTotalQuestionsAnswered())
                    }}
                />
            </div>
        </>
    )
}
