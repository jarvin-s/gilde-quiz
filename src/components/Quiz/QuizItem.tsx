'use client'

import React from 'react'
import { Question } from '@/types/Question'
import { Button } from '../ui/button'

interface QuestionProps {
    question: Question
    onNext: (isCorrect: boolean) => void
}

const QuizItem = ({ question, onNext }: QuestionProps) => {
    const shuffledAnswers = React.useMemo(
        () =>
            [...question.incorrect_answers, question.correct_answer].sort(
                () => Math.random() - 0.5
            ),
        [question]
    )

    const [selectedAnswer, setSelectedAnswer] = React.useState('')

    function isCorrectAnswer(answer: string) {
        return answer === question.correct_answer
    }

    function submitAnswer(answer: string) {
        setSelectedAnswer(answer)
    }

    React.useEffect(() => {
        if (selectedAnswer) {
            const interval = setInterval(() => {
                onNext(selectedAnswer === question.correct_answer)
            }, 1000)
            return () => {
                clearInterval(interval)
            }
        }
    }, [onNext, question, selectedAnswer])

    return (
        <div>
            <div
                dangerouslySetInnerHTML={{ __html: question.question }}
                className='text-2xl'
            />
            <div className='mt-4 flex flex-col gap-5'>
                {shuffledAnswers.map((option, index) => (
                    <Button
                        key={option}
                        className={`rounded-lg p-5 text-white shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg ${
                            selectedAnswer && selectedAnswer === option
                                ? isCorrectAnswer(selectedAnswer)
                                    ? 'bg-green-500'
                                    : 'bg-red-600'
                                : selectedAnswer &&
                                  option === question.correct_answer
                                ? 'bg-green-500'
                                : 'bg-yellow-500'
                        }`}
                        onClick={() => submitAnswer(option)}
                    >
                        <div className='flex items-center justify-start'>
                            <div className='mr-5 rounded-md border p-2 px-3'>
                                {index + 1}.
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: option }} />
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default React.memo(QuizItem)
