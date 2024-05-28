import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables:{
        userId:any,
    }
}>();

blogRouter.use('*',async (c,next)=>{
    const jwt = c.req.header('Authorization')?.split(" ")[1] || "";
    const res =await  verify(jwt,c.env?.JWT_SECRET);
    if(res.id){
      c.set('userId',res.id)
      await next();
    }else{
        c.status(403);
        return c.json({error:"Unauthorized"});
    }
})

blogRouter.get("/bulk",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
    const posts = await prisma.post.findMany({
        select:{
            id:true,
            title:true,
            content:true,
            author:{
                select:{
                    id:true,
                    email:true,
                }
            },
        }
    });
    return c.json(posts);
})

blogRouter.get('/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
	const id = c.req.param('id')
    const post =await prisma.post.findUnique({
        where:{
            id:id,
        }
    });
	return c.json(post)
})

blogRouter.post('/', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
    const body =  await c.req.json();
    const post = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        },
    })
    return c.json(post)
})

blogRouter.put('/',async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
    const body = await c.req.json();
    await prisma.post.update({
        where: {
            id: body.id,
            authorId:userId
        },
        data: {
            title: body.title,
            content: body.content,
        },
        select:{
            id:true,
            title:true,
            content:true,
        }
    })
	return c.text('post updated')
})