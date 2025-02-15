"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"


export const saveSnippets = async(id:number, code:string)=>{
    await prisma.snippet.update({
        where:{
            id
        },
        data:{
            code
        }
    })
    redirect(`/snippets/${id}`)

}

export const deleteSnippet = async(id:number)=>{
    await prisma.snippet.delete({
        where:{
          id
        }
    })
    redirect("/")
}