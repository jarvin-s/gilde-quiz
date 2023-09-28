import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import SignOut from './SignOut'
import { ThemeToggle } from './ThemeToggle'

const Navbar = async () => {
    const session = await getServerSession()
    return (
        <div className='fixed inset-x-0 top-0 border-b-2 py-3'>
            <div className='flex h-full items-center justify-between px-8'>
                <Link className='flex items-center gap-2' href={'/'}>
                    <p
                        className='rounded-lg border-2 border-b-4
                                    border-r-4 border-yellow-500 px-2 py-2 text-2xl font-bold transition-all
                                    duration-300 hover:-translate-y-1 hover:bg-stone-200 hover:text-yellow-600 dark:hover:bg-stone-800'
                    >
                        💭Gilde Quiz
                    </p>
                </Link>
                <div className='flex gap-2'>
                    <ThemeToggle />
                    {session?.user ? <SignOut /> : <></>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
