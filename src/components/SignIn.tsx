'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

const SignIn = () => {
    return (
        <Card className='w-[350px]'>
            <CardHeader>
                <CardTitle className='text-center'>Sign in</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col items-center'>
                <Button className='mb-4' onClick={() => signIn('github')}>
                    <Icons.gitHub className='mr-2 h-4 w-4' />
                    Continue with GitHub
                </Button>
                <Button onClick={() => signIn('google')}>
                    <Icons.google className='mr-2 h-4 w-4' />
                    Continue with Google
                </Button>
            </CardContent>
        </Card>
    )
}

export default SignIn
