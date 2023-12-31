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
import { QuizForm, QuizFormSchema } from '@/schema/quiz'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'

const QuizCreation = () => {
    const form = useForm<QuizForm>({
        resolver: zodResolver(QuizFormSchema),
        defaultValues: {
            category: '',
            difficulty: '',
            amount: '10',
            type: 'multiple',
        },
    })

    return (
        <div className='flex min-h-screen justify-center p-24'>
            <div className='flex flex-col'>
                <div className='rounded-lg border-2 border-b-4 border-l-4 border-yellow-500 p-10'>
                    <Form {...form}>
                        <form>
                            <FormField
                                control={form.control}
                                name='category'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            <div className='mb-10 text-center text-4xl font-extrabold sm:text-left'>
                                                Create{' '}
                                                <span className='bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-transparent'>
                                                    your
                                                </span>{' '}
                                                quiz!
                                            </div>
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value!}
                                            >
                                                <SelectTrigger id='category'>
                                                    <SelectValue placeholder='Choose a category' />
                                                </SelectTrigger>
                                                <SelectContent
                                                    position='popper'
                                                    className='max-h-[10rem] overflow-auto'
                                                >
                                                    {CATEGORIES?.map(
                                                        (category) => (
                                                            <SelectItem
                                                                key={
                                                                    category.key
                                                                }
                                                                value={category.key.toString()}
                                                            >
                                                                {category.text}
                                                            </SelectItem>
                                                        )
                                                    )}
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
                                                defaultValue={field.value!}
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
                                    <FormItem className='mt-6'>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                disabled
                                            >
                                                <SelectTrigger id='amount'>
                                                    <SelectValue placeholder='Choose an amount' />
                                                </SelectTrigger>
                                                <SelectContent position='popper'>
                                                    <SelectItem value='5'>
                                                        5
                                                    </SelectItem>
                                                    <SelectItem value='10'>
                                                        10
                                                    </SelectItem>
                                                    <SelectItem value='15'>
                                                        15
                                                    </SelectItem>
                                                    <SelectItem value='20'>
                                                        20
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='type'
                                render={({ field }) => (
                                    <FormItem className='mt-6'>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            disabled
                                        >
                                            <SelectTrigger id='type'>
                                                <SelectValue placeholder='Choose a question type' />
                                            </SelectTrigger>
                                            <SelectContent position='popper'>
                                                <SelectItem value='multiple'>
                                                    Multiple choice
                                                </SelectItem>
                                                <SelectItem value='boolean'>
                                                    True/false
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                    <Link href={{ pathname: '/game', query: form.getValues() }}>
                        <Button
                            className='main-btn mt-8 font-extrabold hover:text-white'
                            disabled={
                                !form.formState.isValid ||
                                !form.getValues('category') ||
                                !form.getValues('difficulty')
                            }
                        >
                            Start quiz
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QuizCreation
