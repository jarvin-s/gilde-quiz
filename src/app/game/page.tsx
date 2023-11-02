import QuizGame from '@/components/Quiz/QuizGame'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Game = async () => {
    const session = await getServerSession()

    if (!session?.user) {
        redirect('/')
    }
    return <QuizGame />
}

export default Game
