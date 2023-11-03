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
import QuizSlider from './QuizSlider'
import { Slider } from '../ui/slider'

const QuizCreation = () => {
    const form = useForm<QuizForm>({
        resolver: zodResolver(QuizFormSchema),
        defaultValues: {
            category: '',
            difficulty: '',
            amount: '',
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
                                <FormItem className='mt-6'>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
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
                                        {/* <QuizSlider
                                            onChange={field.onChange}
                                            defaultValue={field.value}
                                        /> */}
                                        {/* <Slider
                                            onChange={field.onChange}
                                            // defaultValue={field.value}
                                            max={50}
                                            step={5}
                                            className='mt-6'
                                        /> */}
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
                    <Button className='font-extrabold uppercase'>
                        Start quiz
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default QuizCreation
