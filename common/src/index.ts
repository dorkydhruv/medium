import z from "zod";
 
export const SignupInput = z.object({
    email:z.string().email(),
    password:z.string().min(6).max(100),
    name:z.string().min(2).optional(),
})

export type SignupInputType = z.infer<typeof SignupInput>

export const SigninInput = z.object({
    email:z.string().email(),
    password:z.string().min(6).max(100),
})

export type SigninInputType = z.infer<typeof SigninInput>;

export const CreatePostInput = z.object({
    title:z.string().min(2),
    content:z.string().min(2),
})

export type CreatePostInputType = z.infer<typeof CreatePostInput>;

export const UpdatePostInput = z.object({
    title:z.string().min(2).optional(),
    content:z.string().min(2).optional(),
})

export type UpdatePostInputType = z.infer<typeof UpdatePostInput>;