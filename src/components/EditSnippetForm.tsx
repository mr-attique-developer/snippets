"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";
import { saveSnippets } from "@/actions";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet?.code)
    const handleChange = (value: string = "") => {
        setCode(value)

    }

    const saveSnippetAction = saveSnippets.bind(null, snippet?.id, code)

  return (
    <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">{snippet?.title}</h1>
            <form action={saveSnippetAction}>
                <Button type="submit">Save</Button>
            </form>
        </div>
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={handleChange}
      />
    </div>
  );
};

export default EditSnippetForm;
