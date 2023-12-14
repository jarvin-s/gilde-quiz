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
import { toast } from '@/components/ui/use-toast'
import QuizResult from '@/components/Quiz/QuizResult'

export default function Game() {
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
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        gcTime: 0,
    })

    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [correctAnswer, setCorrectAnswer] = React.useState(0)
    return (
        <>
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
                            toast({
                                title: 'Correct!',
                                description: 'You got the question right!',
                                variant: 'success',
                                duration: 2000,
                            })
                            appDispatch(
                                increaseTotalQuestionsAnsweredCorrectly()
                            )
                        } else {
                            toast({
                                title: 'Incorrect!',
                                description: 'You got the question wrong.',
                                variant: 'destructive',
                                duration: 2000,
                            })
                        }
                        setCurrentQuestion(currentQuestion + 1)
                        appDispatch(increaseTotalQuestionsAnswered())
                    }}
                />
            ) : (
                <QuizResult total={data.length} correct={correctAnswer} />
            )}
        </>
    )
}
