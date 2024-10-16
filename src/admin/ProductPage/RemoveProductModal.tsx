import { Dialog, DialogTitle, DialogPanel, Button } from "@headlessui/react";

interface Props {
  id: string | null;
  productName?: string;
  onClose: () => void;
}

const RemoveProductModal = ({ id, productName, onClose }: Props) => {
  return (
    <Dialog
      open={!!id}
      onClose={onClose}
      as="div"
      className="relative z-10 focus:outline-none"
    >
      <div className="bg-black/40 fixed w-screen inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full">
          <DialogPanel
            transition
            className="bg-white max-w-md w-full p-4 rounded-xl duration-200 ease-out data-[closed]:opacity-0 data-[closed]:transform-[scale(95%)]"
          >
            <DialogTitle as="h3" className="text-xl font-semibold mb-2">
              Remove the product: {productName}
            </DialogTitle>
            <div>
              <div className="font-medium text-slate-600 mb-4">
                This will remove the product forever
              </div>
              <div className="flex flex-row gap-4">
                <Button
                  onClick={onClose}
                  className="flex-1 py-2 border rounded"
                >
                  Cancel
                </Button>
                <Button className="flex-1 py-2 border rounded-md">
                  Remove
                </Button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default RemoveProductModal;
