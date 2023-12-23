import { MoreVertical, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const EditTopMenu = () => {
  return (
    <div className="py-4 w-full bg-white flex pl-6 pr-12 justify-between items-center text-slate-700">
      <div className="flex gap-4 items-center">
        <Button variant={"ghost"} size={"icon"}>
          <ArrowLeft size={20} />
        </Button>

        <span>Называние вопроса</span>
      </div>
      <Button variant={"outline"} size={"icon"}>
        <MoreVertical size={20} />
      </Button>
    </div>
  );
};

export default EditTopMenu;
