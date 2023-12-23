import { getaxioswh } from "@/lib/axios";
import { quizUpdateType } from "@/lib/type/quizdata";

export async function getQuizEdit(id: string) {
  const token = window.localStorage.getItem("token");
  if (!token) return;
  const axios = getaxioswh(token);
  const data = await axios.get(`/quiz/${id}`);
  return data.data as quizUpdateType;
}
