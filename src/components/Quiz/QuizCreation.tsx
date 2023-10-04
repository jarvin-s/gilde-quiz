'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import CATEGORIES from '@/constants/categories'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'

interface Category {
    key: number
    text: string
    value: number
}

const formSchema = z.object({
    category: z.string(),
})

export function QuizCreation() {
    // const [category, setCategory] = useState<Category | null>(null)
    // const { category, setCategory } = React.useContext()

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
        // <div className='flex items-center justify-center p-24'>
        //     <Dropdown
        //         value={category}
        //         onChange={(e) => setCategory(e.value)}
        //         options={CATEGORIES}
        //         optionLabel='option'
        //         placeholder='Select Quiz Category'
        //     />
        // </div>
        <div className='flex min-h-screen justify-center p-24'>
            {/* <Dropdown
                value={categories}
                onChange={(e) => setCategory(e.value)}
                options={CATEGORIES}
                optionLabel='name'
                placeholder='Select a City'
                className='md:w-14rem w-full'
            /> */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8'
                >
                    <div className='card justify-content-center flex'></div>
                    <Button className='uppercase' type='submit'>
                        Begin
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default QuizCreation
