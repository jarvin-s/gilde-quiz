'use client'

import React, { useState, useEffect } from 'react'
import { QuestionsResponse } from '@/types/Question'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuItem,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { CATEGORIES } from '@/constants'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { QuizForm, QuizFormSchema } from '@/schema/question'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'

const QuizCreation = () => {
    const [category, setCategory] = useState(null)
    // const [amount, setAmount] = useState(5)
    // const [difficulty, setDifficulty] = useState('easy')
    // const [questionsType, setQuestionsType] = useState('0')

    // const formSchema = z.object({
    //     username: z.string().min(2, {
    //         message: 'Username must be at least 2 characters.',
    //     }),
    // })

    const form = useForm<QuizForm>({
        resolver: zodResolver(QuizFormSchema),
        defaultValues: {
            category: '',
        },
    })

    // function onSubmit(values: z.infer<typeof formSchema>) {
    //     console.log(values)
    // }

    const handleCategoryClick = (category: any) => {
        setCategory(category)
    }

    return (
        <div className='flex min-h-screen justify-center p-24'>
            <div className='flex flex-col gap-10'>
                <Form {...form}>
                    <form>
                        <FormField
                            control={form.control}
                            name='category'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-2xl font-bold uppercase'>Create your quiz!</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger id='category'>
                                                <SelectValue placeholder='Choose a category' />
                                            </SelectTrigger>
                                            <SelectContent position='popper'>
                                                {CATEGORIES?.map((category) => (
                                                    <SelectItem
                                                        key={category.key}
                                                        value={category.key.toString()}
                                                    >
                                                        {category.text}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'outline'}>
                            {category ? category : 'Choose a category'}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className='max-h-[12rem] overflow-y-auto'>
                            {CATEGORIES?.map((category) => (
                                <DropdownMenuItem
                                    key={category.key}
                                    onSelect={() =>
                                        handleCategoryClick(category.text)
                                    }
                                >
                                    {category.text}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            */}
                <Link href={{ pathname: '/game', query: form.getValues() }}>
                    <Button className='font-extrabold uppercase'>
                        Start quiz
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default QuizCreation
