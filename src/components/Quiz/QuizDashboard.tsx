'use client'

import React from 'react'
import QuizCreateButton from './QuizCreateButton'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import InfoDialog from '../InfoDialog'

const QuizDashboard = () => {
    return (
        <div className='m-[10vw] rounded-lg border-2 border-yellow-400 p-[4rem]'>
            <div className='items:center mx-auto max-w-3xl justify-center text-center'>
                <div className='relative z-10 flex flex-col items-center justify-center gap-4 sm:mx-auto'>
                    <h1 className='text-4xl sm:text-6xl md:text-center'>
                        Test your{' '}
                        <RoughNotation
                            type='underline'
                            show={true}
                            color='orange'
                            strokeWidth={4}
                        >
                            <span className='font-bold text-yellow-600'>knowledge</span>
                        </RoughNotation>{' '}
                        with{' '}
                    </h1>
                    <h1 className='text-4xl sm:text-6xl md:text-center'>
                        <RoughNotation
                            type='underline'
                            show={true}
                            color='orange'
                            strokeWidth={4}
                        >
                            <span className='font-bold text-yellow-600'>endless</span>
                        </RoughNotation>{' '}
                        possibilities!
                    </h1>
                    <div className='flex flex-col mt-4 gap-2 sm:flex-row'>
                        <QuizCreateButton />
                        <InfoDialog />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizDashboard
