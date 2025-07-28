import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";


export default function AddItemDialog(){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-violet-600 hover:bg-violet-500 cursor-pointer">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Item</DialogTitle>
          <DialogDescription>
            Add Item to your inventory.
          </DialogDescription>
        </DialogHeader>
        <form action="">
          <div className="flex flex-col space-y-1 mb-2">
            <label htmlFor="">Name</label>
            <Input></Input>
          </div>
          <div className="flex flex-col space-y-1 mb-2">
            <label htmlFor="">Description</label>
            <Input></Input>
          </div>
          <div className="flex flex-col space-y-1 mb-2">
            <label htmlFor="">Price</label>
            <Input></Input>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}