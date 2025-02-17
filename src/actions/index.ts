"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
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
    revalidatePath(`/snippets/${id}`)
    redirect(`/snippets/${id}`)

}

export const deleteSnippet = async(id:number)=>{
    await prisma.snippet.delete({
        where:{
          id
        }
    })
    revalidatePath("/")
    redirect("/")
}

export const createSnippets  = async(prevState:{message:string},formData: FormData) => {

    try {
        const title = formData.get("title") 
    const code = formData.get("code") 
    if(typeof title !== "string" || title.length < 4){
    
    return   {message: " Title is required and must be longer"}
        
    }
    if(typeof code !== "string" || code.length < 8){
        return {message: "Code is required and must be longer"}
    }

    revalidatePath("/")
   
    } catch (error: unknown) {
        if (error instanceof Error){

            return {message: error.message}
        }
    }
    redirect("/")
  }