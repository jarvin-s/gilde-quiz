import { Button } from '@/components/ui/button'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard = async () => {
    const session = await getServerSession()

    if (!session?.user) {
        redirect('/')
    }

    return (
        <div className='container relative mx-auto overflow-hidden px-6 py-12 sm:py-16'>
            <div className='mx-auto max-w-3xl justify-center text-center'>
                <div className='relative z-10 flex flex-col items-center justify-center gap-4 pt-[90px] sm:mx-auto md:w-3/4 lg:mx-0 lg:h-auto lg:min-h-[300px] lg:w-full lg:gap-8 lg:pt-[90px] '>
                    <h1 className='text-scale-1200 text-left text-6xl font-bold md:text-center'>
                        Experience quiz{' '}
                        <span className='bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent'>
                            excellence
                        </span>{' '}
                        with my app!
                    </h1>
                    <div className='pt-4'>
                        <Button className='btn-start font-bold uppercase'>
                            Start quiz
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
