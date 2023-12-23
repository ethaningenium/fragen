import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";

type data = {
  title: string;
  description: string;
};

const TitleEditDialog: React.FC<{
  data: data;
  setData: (elem: data) => void;
}> = ({ data, setData }) => {
  const [name, setName] = useState(data.title);
  const [desc, setDesc] = useState(data.description);
  const saveData = () => {
    setData({
      title: name,
      description: desc,
    });
  };
  useEffect(() => {
    setName(data.title);
    setDesc(data.description);
  }, [data]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-4 right-4"
        >
          <Pencil size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Менять называния опроса</DialogTitle>
          <DialogDescription>
            Вы можете менять называния опроса всегда. Ваши изменении будут
            доступны в самом опросе
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Имя
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Описание
            </Label>
            <Input
              id="username"
              value={desc}
              className="col-span-3"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={saveData}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TitleEditDialog;
