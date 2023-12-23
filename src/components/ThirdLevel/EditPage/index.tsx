"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import EditTopMenu from "@/components/SecondLevel/EditTopmenu";
import React, { useEffect, useState } from "react";
import { getQuizEdit } from "./getQuiz";
import Title from "@/components/SecondLevel/EditTitle";
import { update, updateType } from "./updateQuiz";
import { Button } from "@/components/ui/button";

const EditPage = () => {
  const { quizId } = useParams();
  const [title, setTitle] = useState({
    title: "",
    description: "",
  });

  const { data, isError, isLoading } = useQuery({
    queryKey: ["edit"],
    queryFn: async () => {
      if (typeof quizId === "string") {
        return getQuizEdit(quizId);
      }
    },
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationKey: ["update"],
    mutationFn: async (elem: updateType) => {
      return update(elem);
    },
  });
  useEffect(() => {
    setTitle({
      title: data?.title || "",
      description: data?.description || "",
    });
  }, [data]);
  return (
    <div className="w-full bg-slate-100 min-h-screen">
      <EditTopMenu />
      <Button
        onClick={() => {
          if (typeof quizId === "string") {
            mutation.mutate({ id: quizId, ...title });
          }
        }}
      >
        {mutation.isPending ? "Updating" : "Update"}
      </Button>
      {mutation.isSuccess && <h1>Success</h1>}
      <div className="p-8 flex flex-col gap-6 items-center">
        <Title data={title} setData={setTitle} />
      </div>
    </div>
  );
};

export default EditPage;
