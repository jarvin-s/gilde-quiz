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
import { Dropdown } from 'primereact/dropdown'

const QuizCreation = () => {
    const [category, setCategory] = useState(null)
    const [amount, setAmount] = useState(5)
    const [difficulty, setDifficulty] = useState('easy')
    const [questionsType, setQuestionsType] = useState('0')
    const [data, setData] = useState<QuestionsResponse[]>([])
    const [curr, setCurr] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const api = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${questionsType}`

            try {
                const response = await fetch(api)
                if (response.ok) {
                    const data = await response.json()
                    setData(data.results)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    const handleCategoryClick = (category: any) => {
        setCategory(category)
    }

    return (
        <div className='flex min-h-screen justify-center p-24'>
            <div className='flex flex-col gap-10'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'outline'}>
                            {category ? category : 'Choose a category'}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className='overflow-y-auto max-h-[12rem]'>
                            {CATEGORIES.map((category) => (
                                <DropdownMenuItem
                                    key={category.key}
                                    onSelect={() =>
                                        handleCategoryClick(category.text)
                                    }
                                    textValue={category.text}
                                >
                                    {category.text}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default QuizCreation
