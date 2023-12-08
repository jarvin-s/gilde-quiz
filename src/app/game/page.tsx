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
import { Skeleton } from '@/components/ui/skeleton'

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

    const { data, isLoading, error } = useQuery({
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
                {isLoading ? (
                    <div className='flex h-screen items-center justify-center'>
                        <Skeleton className='h-12 w-12 rounded-full' />
                        <div className='space-y-2'>
                            <Skeleton className='h-4 w-[250px]' />
                            <Skeleton className='h-4 w-[200px]' />
                        </div>
                    </div>
                ) : error || !data ? (
                    <div className='flex h-screen justify-center p-24 text-4xl font-bold text-red-500'>
                        ERROR: Quiz not found!
                    </div>
                ) : currentQuestion < data.length ? (
                    <QuizGame
                        correctAnswer={correctAnswer}
                        currentQuestion={currentQuestion}
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
                ) : (
                    <div className='flex min-h-screen flex-col items-center justify-center'>
                        <div className='text-4xl'>Quiz finished!</div>
                        <span className='font-bold uppercase'>
                            Total questions: {data.length}
                        </span>
                        <span className='font-bold text-green-500'>
                            Correct answers: {correctAnswer}
                        </span>
                    </div>
                )}
            </div>
        </>
    )
}
