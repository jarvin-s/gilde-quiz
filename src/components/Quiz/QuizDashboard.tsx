'use client'

import React from 'react'
import QuizCreateButton from './QuizCreateButton'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

const QuizDashboard = () => {
    return (
        <div className='m-[10vw] p-[4rem] border-2 rounded-lg border-yellow-400'>
            <div className='mx-auto max-w-3xl justify-center items:center text-center'>
                <div className='relative z-10 flex flex-col items-center justify-center gap-4 sm:mx-auto'>
                    <h1 className='text-4xl sm:text-6xl font-bold md:text-center'>
                        Test your{' '}
                        <span className='bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent'>
                            knowledge
                        </span>{' '}
                        with{' '}
                        <span className='bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent'>
                            endless
                        </span>{' '}
                        possibilities!
                    </h1>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <QuizCreateButton />
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant='outline'>
                                    More info{' '}
                                    <QuestionMarkCircledIcon className='ml-1' />
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className='bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-4xl font-extrabold text-transparent'>
                                        Gilde Quiz
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogDescription>
                                    <p>
                                        A very minimalistic quiz app for your
                                        entertainment.
                                    </p>
                                </DialogDescription>
                                <Separator />
                                <div className='my-2'>
                                    <p className='text-xl font-bold'>
                                        Tech stack
                                    </p>
                                    <div className='mt-2 grid grid-cols-3 justify-around gap-y-3'>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                alt='Next.js'
                                                src={'/nextjs.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <span>Next.js</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                alt='TypeScript'
                                                src={'/typescript.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <span>TypeScript</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                alt='Prisma'
                                                src={'/prisma.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <span>Prisma</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                alt='NextAuth.js'
                                                src={'/nextauth.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <span>NextAuth.js</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                alt='Supabase'
                                                src={'/supabase.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <span>Supabase</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Image
                                                alt='TailwindCSS'
                                                src={'/tailwind.png'}
                                                width={25}
                                                height={25}
                                            />
                                            <span>TailwindCSS</span>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizDashboard
