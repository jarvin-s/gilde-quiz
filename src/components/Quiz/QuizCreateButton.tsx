'use client'

import React from 'react'
import { Button } from '../ui/button'
import ArrowIcon from '../ArrowIcon'
import { useRouter } from 'next/navigation'

const QuizCreateButton = () => {
    const router = useRouter()

    return (
        <div>
            <Button
                className='main-btn font-bold hover:text-white'
                onClick={() => {
                    router.push('/quiz')
                }}
            >
                Create quiz
                <ArrowIcon />
            </Button>
        </div>
    )
}

export default QuizCreateButton
