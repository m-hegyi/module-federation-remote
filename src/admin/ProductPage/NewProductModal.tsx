import { CheckIcon } from "@heroicons/react/16/solid";

import {
  Button,
  Checkbox,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Input,
  Textarea,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Formik } from "formik";

const FieldClass = "flex flex-col mb-4";
const LabelClass = "mb-4";
const InputClass = "rounded px-4 py-2 border";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const NewProductModal = ({ isOpen, onClose }: Props) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    className="relative z-10 focus:outline-none"
    as="div"
  >
    <div className="bg-black/40 fixed w-screen inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-full">
        <DialogPanel
          transition
          className="bg-white max-w-4xl w-full rounded-xl duration-200 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        >
          <div className="flex justify-between items-center px-4 mt-4 pb-4 border-b">
            <DialogTitle as="h3" className="text-2xl font-semibold">
              New Product
            </DialogTitle>

            <Button onClick={onClose}>
              <XMarkIcon className="size-6" />
            </Button>
          </div>
          <div className="m-4">
            <Formik
              initialValues={{
                productName: "",
                description: "",
                visible: true,
                price: 10,
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);

                setTimeout(() => {
                  setSubmitting(false);
                }, 2000);
              }}
            >
              {({
                values,
                isSubmitting,
                setFieldValue,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field className={FieldClass}>
                    <Label className={LabelClass}>Product name</Label>
                    <Input
                      className={InputClass}
                      name="productName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.productName}
                    />
                  </Field>
                  <Field className={FieldClass}>
                    <Label className={LabelClass}>Description</Label>
                    <Textarea
                      className={InputClass}
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                  </Field>
                  <Field className={FieldClass}>
                    <Label className={LabelClass}>Price</Label>
                    <Input
                      className={InputClass}
                      name="price"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                  </Field>
                  <Field className="flex items-center gap-2 mb-4">
                    <Checkbox
                      name="visible"
                      onChange={(value) => setFieldValue("visible", value)}
                      onBlur={handleBlur}
                      checked={values.visible}
                      className="group size-6 block border rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
                    >
                      <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                    </Checkbox>
                    <Label>Visible</Label>
                  </Field>
                  <Button
                    className="bg-red-500 text-white font-medium rounded w-60 p-2 hover:bg-red-600 disabled:bg-red-100 disabled:text-gray-800"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
);

export default NewProductModal;
