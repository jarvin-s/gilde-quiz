'use client'

import React from 'react'
import { Question } from '@/types/Question'
import { Button } from '../ui/button'

interface QuestionProps {
    question: Question
    onNext: (isCorrect: boolean) => void
}

const QuestionItem = ({ question, onNext }: QuestionProps) => {
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
            onNext(selectedAnswer === question.correct_answer)
        }
    }, [onNext, question, selectedAnswer])

    return (
        <div className='mt-5 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div
                dangerouslySetInnerHTML={{ __html: question.question }}
                className='font-medium sm:text-xl md:text-2xl lg:text-3xl'
            />
            <div className='flex flex-col gap-5'>
                {shuffledAnswers.map((option) => (
                    <Button
                        key={option}
                        className={`rounded-lg p-5 hover:bg-yellow-400 shadow-md transition-all duration-300 hover:shadow-lg ${
                            selectedAnswer && selectedAnswer === option
                                ? isCorrectAnswer(selectedAnswer)
                                    ? 'bg-green-400'
                                    : 'bg-red-400'
                                : selectedAnswer &&
                                  option === question.correct_answer
                                ? 'bg-green-400'
                                : 'bg-yellow-500'
                        }`}
                        onClick={() => submitAnswer(option)}
                    >
                        <div dangerouslySetInnerHTML={{ __html: option }} />
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default React.memo(QuestionItem)