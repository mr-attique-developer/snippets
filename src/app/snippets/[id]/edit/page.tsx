import React from "react";

import { prisma } from "@/lib/prisma";
import EditSnippetForm from "@/components/EditSnippetForm";

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return <div>Snippet not found</div>;
  }
  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditPage;
