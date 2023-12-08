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
        <div className='flex justify-center p-24'>
            <div className='flex-1'>
                {props.correctAnswer}/{props.currentQuestion + 1}
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
