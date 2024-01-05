import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

const InfoDialog = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant='outline'>
                        More info <QuestionMarkCircledIcon className='ml-1' />
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
                            A very minimalistic quiz app for your entertainment.
                        </p>
                    </DialogDescription>
                    <Separator />
                    <div className='my-2'>
                        <p className='text-xl font-bold'>Tech stack</p>
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
        </>
    )
}

export default InfoDialog
