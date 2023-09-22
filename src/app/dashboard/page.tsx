import SignOut from '@/components/SignOut';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      <div className='flex flex-row md:flex-col text-8xl text-blue-500 underline font-bold'>DASHBOARD</div>

      <SignOut />
    </div>

  )
}

export default Dashboard