import * as z from 'zod'

export const QuizFormSchema = z.object({
    category: z.string().optional(),
    difficulty: z.string().optional(),
    amount: z.string().optional(),
    type: z.string().optional()
})

export type QuizForm = z.infer<typeof QuizFormSchema>