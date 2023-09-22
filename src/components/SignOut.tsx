"use client"

import React from 'react'
import { signOut } from "next-auth/react"
import { Button } from './ui/button'

const SignOut = () => {

    return (
        <div><Button onClick={() => signOut()}>Sign out</Button></div>
    )
}

export default SignOut