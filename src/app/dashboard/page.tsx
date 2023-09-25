import { Button } from '@/components/ui/button';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className='py-12 container relative mx-auto px-6 sm:py-16 overflow-hidden'>
      <div className='mx-auto max-w-3xl justify-center text-center'>
        <div className='relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8 '>
          <h1 className='text-6xl font-bold text-left md:text-center text-scale-1200'>Experience quiz <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-800'>excellence</span> with my app!</h1> 
          <div className='pt-4'><Button className=''>Start quiz</Button></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard