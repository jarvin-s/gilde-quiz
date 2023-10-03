'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import CATEGORIES from '@/constants/categories'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import React from 'react'

const formSchema = z.object({
    category: z.string(),
})

export function QuizCreation() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        
    }

    return (
        <div className='flex min-h-screen justify-center p-24'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8'
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='outline'>Category</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-56'>
                            <DropdownMenuSeparator />
                            {CATEGORIES.map((category) => (
                                <DropdownMenuItem
                                    key={category.key}
                                    // onSelect={currentValue}
                                >
                                    {category.text}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className='uppercase' type='submit'>
                        Begin
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default QuizCreation
