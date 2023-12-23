"use client";

import Dialog from "../EditTitleDialog";

type data = {
  title: string;
  description: string;
};

const Title: React.FC<{
  data: data;
  setData: (elem: data) => void;
}> = ({ data, setData }) => {
  return (
    <div className="w-full bg-white p-6 flex flex-col gap-6 relative shadow-2xl shadow-black/10 rounded-xl">
      <Dialog data={data} setData={setData} />
      <h1 className="text-3xl font-normal text-slate-700">{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default Title;
