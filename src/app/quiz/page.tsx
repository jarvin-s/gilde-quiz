import QuizCreation from '@/components/Quiz/QuizCreation'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const Quiz = async () => {
    const session = await getServerSession()

    if (!session?.user) {
        redirect('/')
    }

    return (
        <>
            <QuizCreation />
        </>
    )
}

export default Quiz
