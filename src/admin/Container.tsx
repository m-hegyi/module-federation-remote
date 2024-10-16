import { useState, type PropsWithChildren } from "react";
import { Button } from "@headlessui/react";
import NewProductModal from "./ProductPage/NewProductModal";

interface Props {
  title: string;
  description: string;
}

const Container = ({
  title,
  description,
  children,
}: PropsWithChildren<Props>) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="p-5 rounded-xl border w-full m-5">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm font-medium text-gray-600/75">{description}</p>
        </div>
        <div>
          <Button
            onClick={() => setOpen(true)}
            className="text-white font-semibold rounded-md px-3 py-2 bg-indigo-600 hover:bg-indigo-500"
          >
            Add new
          </Button>
        </div>
      </div>
      <NewProductModal isOpen={isOpen} onClose={() => setOpen(false)} />
      {children}
    </div>
  );
};

export default Container;
