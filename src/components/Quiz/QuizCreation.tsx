'use client'

import React, { useState, useEffect } from 'react'
import { QuestionsResponse } from '@/types/Question' // Adjust the import path as needed

const QuizCreation = () => {
    const [data, setData] = useState<QuestionsResponse[]>([])
    const [curr, setCurr] = useState(0)
    const amount = 5

    useEffect(() => {
        const fetchData = async () => {
            const api = `https://opentdb.com/api.php?amount=${amount}&category=23&difficulty=easy&type=multiple`

            try {
                const response = await fetch(api)
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
        <div className='flex min-h-screen justify-center p-24'>
            <div className='flex flex-col gap-10'>
                <ul>
                    {data.map((question, index) => (
                        <li key={index}>
                            <div>
                                <p>Question: {question.question}</p>
                                <p>Correct Answer: {question.correct_answer}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default QuizCreation
