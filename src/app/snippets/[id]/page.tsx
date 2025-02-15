import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import NotFound from "./not-found";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const snippet = await prisma.snippet.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!snippet) {
    return notFound()
  }
  

  const delSnippet = deleteSnippet.bind(null, snippet.id)
  return <div>
    
    <div className="flex items-center justify-between mt-3"> 
        <h1 className="text-xl font-bold">{snippet?.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippets/${snippet?.id}/edit`} > <Button>Edit</Button> </Link>

          <form action={delSnippet}>

            <Button variant={"destructive"} type="submit">Delete</Button>
          </form>
        </div>

    </div>
        <div className="bg-gray-400 p-4 mt-2 rounded-xl">
            <pre>
                <code>
                    {snippet?.code}
                </code>
            </pre>
        </div>


    
  </div>;
};

export default page;
