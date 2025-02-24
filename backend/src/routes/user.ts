import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { SigninInput, SignupInput } from "dorkydhruv-common";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
}>();

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
    const body = await c.req.json();
    const {success } = SignupInput.safeParse(body);
    if(!success){
      c.status(400);
      return c.json({error: "Invalid input"});
    }
    try{
      const user = await prisma.user.create({
        data:{
          email: body.email,
          password: body.password,
        }
      });
      const jwt = await sign({
        id:user.id,
      }, c.env?.JWT_SECRET);
      return c.json({jwt});
    }catch(e){
      c.status(403)
      return c.json({e});
    }
})

userRouter.post('/signin',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
    const body = await c.req.json();
    const {success} = SigninInput.safeParse(body);
    if(!success){
      c.status(400);
      return c.json({error: "Invalid input"});
    }
    const user = await prisma.user.findUnique({
      where:{
        email: body.email,
        password: body.password,
      }
    });
    if(!user){
      c.status(401);
      return c.json({error: "Inavlid credentials"});
    }
    const jwt = await sign({
      id: user.id,
    },c.env?.JWT_SECRET);
    return c.json({jwt:jwt});
  })