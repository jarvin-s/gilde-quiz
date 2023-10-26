import React, { useState } from 'react'
import { Slider } from '../ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>

export default function QuizSlider({ className, ...props }: SliderProps) {
    return (
        <Slider
            defaultValue={[10]}
            max={50}
            step={5}
            {...props}
            className='mt-6'
        />
    )
}
