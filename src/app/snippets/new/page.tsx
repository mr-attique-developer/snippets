import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const NewSnippet = () => {
  async function handleSubmit(formData: FormData) {
    "use server"
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const snippet = await prisma.snippet.create({
     data:{
      title, code
     }
    })
    console.log(snippet)
    redirect("/")
  }
  return (
    <form action={handleSubmit}>
      <div className="space-y-4">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" name="title" placeholder="Title" />
      </div>
      <div className="space-y-4">
        <Label htmlFor="code">Code</Label>
        <Textarea id="code" name="code" placeholder="Type your code here..."/>
      </div>
      <div className="text-center">
        <Button className="mt-3 w-1/4 mx-auto" type="submit">Add</Button>
      </div>
    </form>
  );
};

export default NewSnippet;
