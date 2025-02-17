import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

// export const dynamic = "force-dynamic"
// export const revalidate = 0
const Home = async() => {
  const snippet = await prisma.snippet.findMany();
  
  return (
    <>
      <div className="font-bold text-3xl">Home</div>
      <div className="flex items-center justify-between mt-3">
        <p className="text-xl font-bold">Snippets</p>
        <Link href={"/snippets/new"}>
          <Button>New</Button>
        </Link>
      </div>
      <div className="mt-6">

        {
          snippet?.map((snip)=>(
            <div key={snip.id} className="flex items-center justify-between  shadow-lg  bg-gray-300 rounded-xl p-4 mt-2">
              <p>{snip.title}</p>
              <Link href={`/snippets/${snip.id}`}>
                <Button variant={"link"}>View</Button>
              </Link>
            </div>
          ))
        }
            </div>
    </>
  );
};

export default Home;
