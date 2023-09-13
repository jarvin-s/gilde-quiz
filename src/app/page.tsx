"use client"
import { ThemeToggle } from '@/components/ThemeToggle'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { signIn } from 'next-auth/react'

// const text = [
//   {
//   title: "test",
//   description: "123"
//   }
// ]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle className='text-center'>Sign in</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className='items-center' onClick={() => signIn("github")}>
              <Icons.gitHub className='mr-2 h-4 w-4' />
              Continue with GitHub
            </Button>
              <ThemeToggle/>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </main>
  )
}
