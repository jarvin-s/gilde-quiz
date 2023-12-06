'use client'

import { Question, QuestionsResponse } from '@/types/Question'
import React, { useEffect, useState } from 'react'
import QuizItem from '@/components/Quiz/QuizItem'
4
interface QuizQuestionProps {
    correctAnswer: number
    currentQuestion: number
    totalQuestions: number
    question: Question
    onNext: (isCorrect: boolean) => void
}

function QuizGame(props: QuizQuestionProps) {
    const [data, setData] = useState<QuestionsResponse[]>([])
    const [curr, setCurr] = useState(0)

    return (
        <div className='flex justify-center p-24'>
            {/* <ul>
                {data.map((questions, index) => (
                    <li className='p-4' key={index}>
                        <p>Question: {questions.question}</p>
                        <p className='text-red-500'>
                            Incorrect answers: {questions.incorrect_answers}
                        </p>
                        <p className='text-green-500'>
                            Correct answer: {questions.correct_answer}
                        </p>
                    </li>
                ))}
            </ul> */}
            {props.correctAnswer}/{props.currentQuestion + 1}
            <QuizItem
                key={props.question.question}
                question={props.question}
                onNext={props.onNext}
            />
        </div>
    )
}

export default QuizGame
