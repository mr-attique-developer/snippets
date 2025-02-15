"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import * as actions from "@/actions"

const NewSnippet = () => {
const [handleStateData,handleSubmit] = useActionState(actions.createSnippets,{message:""})
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

      {
        handleStateData.message && (
          <div className="bg-red-500 w-full rounded-xl p-4 mt-3">{handleStateData.message}</div>
        )
      }
      <div className="text-center">
        <Button className="mt-3 w-1/4 mx-auto" type="submit">Add</Button>
      </div>
    </form>
  );
};

export default NewSnippet;
