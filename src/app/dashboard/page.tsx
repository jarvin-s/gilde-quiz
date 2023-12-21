import QuizDashboard from '@/components/Quiz/QuizDashboard'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard = async () => {
    const session = await getServerSession()

    if (!session?.user) {
        redirect('/')
    }

    return (
        <>
            <QuizDashboard />
        </>
    )
}

export default Dashboard
