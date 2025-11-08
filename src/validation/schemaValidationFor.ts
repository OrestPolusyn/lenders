// // validation/schemas.ts

// import { z } from 'zod'

// export const contactFormSchema = z.object({
//   fullName: z.string().nonempty('Full name is required'),
//   email: z
//     .string()
//     .email('Please enter a valid email')
//     .nonempty('Email is required'),
//   phoneNumber: z.string().optional(),
//   company: z.string().optional(),
//   yourQuestions: z.string().optional(),
// })

// export type ContactFormData = z.infer<typeof contactFormSchema>
