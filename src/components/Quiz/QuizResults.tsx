import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { DashboardIcon } from '@radix-ui/react-icons'

interface QuizResultsProps {
    total: number
    correct: number
}

function QuizResults(props: QuizResultsProps) {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center'>
            <div className='text-4xl'>Quiz finished!</div>
            <span className='font-bold uppercase'>
                Total questions: {props.total}
            </span>
            <span className='font-bold text-green-500'>
                Correct answers: {props.correct}
            </span>
            <Link href={'/dashboard'} className='mt-4'>
                <Button type='button'><DashboardIcon className='mr-1' />Back to dashboard</Button>
            </Link>
        </div>
    )
}

export default QuizResults
