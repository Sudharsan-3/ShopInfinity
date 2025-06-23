import { PrismaClient } from "@prisma/client"
export const ReadProduct = async(req,res)=>{
    const prisma = new PrismaClient();
    const response = await prisma.product.findmany()
    res.send(res)
    console.log(response)
}