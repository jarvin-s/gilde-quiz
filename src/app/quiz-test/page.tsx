import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import CATEGORIES from '@/constants/categories'
import NUM_OF_QUESTIONS from '@/constants/numOfQuestions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function QuizTest() {
    const session = await getServerSession()
    if (!session?.user) {
        redirect('/')
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className='flex flex-col text-left'>
                        
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
