import { PrismaClient } from "@prisma/client"
export const Read = async(req,res)=>{
    const prisma = new PrismaClient();
    const response = await prisma.product.findmany()
    console.log(response)
}