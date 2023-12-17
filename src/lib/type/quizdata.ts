import z from 'zod'

const question = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  quizType: z.string(),
  withOwnAnswer: z.boolean(),
  variants: z.string(),
});

const quizUpdate = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  questions: z.array(question),
});

const quizCreate = z.object({
  title: z.string(),
  description: z.string(),
});

export type quizCreateType = z.infer<typeof quizCreate>;
export type quizUpdateType = z.infer<typeof quizUpdate>;
export type questionType = z.infer<typeof question>;