'use client'

import { QuestionsResponse } from '@/types/Question'
import React, { useEffect, useState } from 'react'

const QuizGame = () => {
    const [data, setData] = useState<QuestionsResponse[]>([])
    const [curr, setCurr] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const urlSearchParams = new URLSearchParams(window.location.search)
            const category = urlSearchParams.get('category')
            const amount = urlSearchParams.get('amount')
            const difficulty = urlSearchParams.get('difficulty')
            const type = urlSearchParams.get('type')
            const api = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

            try {
                let response = await fetch(api)
                if (response.ok) {
                    const data = await response.json()
                    setData(data.results)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])
    return (
        <div className='flex justify-center p-24'>
            <ul>
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
            </ul>
        </div>
    )
}

export default QuizGame
