'use client'

import { Question, QuestionsResponse } from '@/types/Question'
import React, { useEffect, useState } from 'react'
import QuizItem from '@/components/Quiz/QuizItem'

interface QuizQuestionProps {
    correctAnswer: number
    currentQuestion: number
    question: Question
    onNext: (isCorrect: boolean) => void
}

function QuizGame(props: QuizQuestionProps) {
    return (
        <div className='m-24 flex justify-center border-2 border-yellow-300 p-16'>
            <div className='mr-6 mt-2 font-bold'>
                Correct: {props.correctAnswer} /
                Total: {props.currentQuestion + 1}
            </div>
            <QuizItem
                key={props.question.question}
                question={props.question}
                onNext={props.onNext}
            />
        </div>
    )
}

export default QuizGame
