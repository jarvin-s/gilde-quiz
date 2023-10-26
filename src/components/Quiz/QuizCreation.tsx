'use client'

import React from 'react'
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
import QuizSlider from './QuizSlider'

const QuizCreation = () => {
    const form = useForm<QuizForm>({
        resolver: zodResolver(QuizFormSchema),
        defaultValues: {
            category: '',
            difficulty: '',
            amount: 10,
            type: '',
        },
    })

    return (
        <div className='flex min-h-screen justify-center p-24'>
            <div className='flex flex-col gap-4'>
                <Form {...form}>
                    <form>
                        <FormField
                            control={form.control}
                            name='category'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-2xl font-bold uppercase'>
                                        Create your quiz!
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger id='category'>
                                                <SelectValue placeholder='Choose a category' />
                                            </SelectTrigger>
                                            <SelectContent
                                                position='popper'
                                                className='max-h-[10rem] overflow-auto'
                                            >
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
                        <FormField
                            control={form.control}
                            name='difficulty'
                            render={({ field }) => (
                                <FormItem className='mt-6'>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger id='difficulty'>
                                                <SelectValue placeholder='Choose a difficulty' />
                                            </SelectTrigger>
                                            <SelectContent position='popper'>
                                                <SelectItem value='easy'>
                                                    Easy
                                                </SelectItem>
                                                <SelectItem value='medium'>
                                                    Medium
                                                </SelectItem>
                                                <SelectItem value='hard'>
                                                    Hard
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='amount'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        {/* <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value?.toString()}
                                    >
                                        <SelectTrigger id='amount'>
                                            <SelectValue placeholder='Choose an amount'/>
                                        </SelectTrigger>
                                        <SelectContent position='popper'>
                                            <SelectItem value='1'>
                                                1
                                            </SelectItem>
                                        </SelectContent>
                                    </Select> */}
                                        <QuizSlider onChange={field.onChange} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
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
