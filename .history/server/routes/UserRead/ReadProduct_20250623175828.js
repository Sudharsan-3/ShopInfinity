import { PrismaClient } from "@prisma/client"
export const ReadProduct = async(req,res)=>{
    const prisma = new PrismaClient();
    const response = await prisma.Product.findMany()
    res.send(response)
    console.log(response)
}