import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Button,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  PencilIcon,
  EyeSlashIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

interface Props {
  onRemove: () => void;
}

const ProductAction = ({ onRemove }: Props) => (
  <Menu>
    <MenuButton className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white py-1.5 px-2 text-sm/6 font-semibold focus:outline-none">
      Options
      <ChevronDownIcon className="size-4 fill-white" />
    </MenuButton>
    <MenuItems
      transition
      anchor="bottom end"
      className="w-52 origin-top-right p-1 border shadow rounded-xl text-sm/6 font-medium bg-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] data-[closed]:scale-95 data-[closed]:opacity-0"
    >
      <MenuItem>
        <button className="flex w-full items-center gap-2 rounded-lg hover:bg-slate-200/75 py-1.5 px-3">
          <PencilIcon className="size-4" />
          <div>Edit</div>
          {/* <kbd>⌘E</kbd> */}
        </button>
      </MenuItem>
      <MenuItem>
        <button className="flex w-full items-center gap-2 rounded-lg hover:bg-slate-200/75 py-1.5 px-3">
          <EyeSlashIcon className="size-4" />
          <div>Hide</div>
        </button>
      </MenuItem>
      <div className="my-1 h-px bg-slate-200/50" />
      <MenuItem>
        <Button
          onClick={onRemove}
          className="flex w-full items-center gap-2 rounded-lg hover:bg-slate-200/75 py-1.5 px-3 text-red-600"
        >
          <TrashIcon className="size-4" />
          <div>Delete</div>
        </Button>
      </MenuItem>
    </MenuItems>
  </Menu>
);

export default ProductAction;
