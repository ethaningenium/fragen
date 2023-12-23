"use client";

import { getaxioswh } from "@/lib/axios";
import { quizUpdateType } from "@/lib/type/quizdata";

export type updateType = {
  id: string;
  title: string;
  description: string;
};

export async function update({ id, title, description }: updateType) {
  const token = window.localStorage.getItem("token");
  if (!token) return;
  const axios = getaxioswh(token);
  const data = await axios.patch("/quiz", {
    id: id,
    title: title,
    description: description,
  });
  return data.data as quizUpdateType;
}
