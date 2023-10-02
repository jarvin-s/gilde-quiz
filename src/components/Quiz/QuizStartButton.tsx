'use client'

import React from 'react'
import { Button } from '../ui/button'
import ArrowIcon from '../ArrowIcon'
import { useRouter } from 'next/navigation'
import { CATEGORIES } from '@/constants'

const QuizStartButton = () => {
    const router = useRouter()

    return (
        <div>
            <ul>
                {CATEGORIES.map((category) => (
                    <li key={category.key}>
                        Category: {category.text}, Value: {category.value}
                    </li>
                ))}
            </ul>
            <Button
                className='btn-start font-extrabold uppercase'
                onClick={() => {
                    router.push('/quiz')
                }}
            >
                Start quiz
                <ArrowIcon />
            </Button>
        </div>
    )
}

export default QuizStartButton
