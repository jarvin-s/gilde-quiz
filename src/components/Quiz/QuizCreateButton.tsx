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
                className='btn-start font-extrabold uppercase'
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
