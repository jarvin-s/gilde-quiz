'use client'

import { CATEGORIES } from '@/constants'
import { QuestionsResponse } from '@/types/Question'
import React, { useEffect, useState } from 'react'

const Game = () => {
    const [data, setData] = useState<QuestionsResponse[]>([])
    const [curr, setCurr] = useState(0)
    const amount = 5
    const difficulty = 'easy'
    const questionsType = 'multiple'

    useEffect(() => {
        const fetchData = async () => {
            const urlSearchParams = new URLSearchParams(window.location.search)
            const category = urlSearchParams.get('category')
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

    return <div className='flex justify-center p-24'></div>
}

export default Game
