import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    return (
        <div className='fixed inset-x-0 top-0 border-b-2 py-3'>
            <div className='flex items-center justify-between h-full px-8 gap-'>
                <Link className='flex items-center gap-2' href={'/'}>
                    {/* <span className='text-4xl transition-all duration-300 hover:-translate-y-2'>💭</span> <span className='transition-all hover:-translate-y-2 duration-300 text-4xl hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br hover:from-yellow-500 to-orange-200'>Gilde</span> <span className='transition-all hover:-translate-y-2 duration-300 text-4xl'>Quiz</span> */}
                    <p
                        className='rounded-lg border-2 border-b-4
                                    border-r-4 border-yellow-500 px-2 py-2 text-2xl font-bold transition-all
                                    duration-300 hover:-translate-y-1 hover:bg-stone-200 hover:text-yellow-600 dark:hover:bg-stone-800'
                    >
                        💭Gilde Quiz
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
