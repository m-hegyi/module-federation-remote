import ProductAction from "./ProductAction";
import { useState } from "react";
import RemoveProductModal from "./RemoveProductModal";

export interface Product {
  id: string;
  productName: string;
  description: string;
  price: number
}

const ProductTable = ({ products }: { products: Product[] }) => {
  const [removeId, setRemoveId] = useState<string | null>(null);

  const removableProduct = removeId
    ? products.find(({ id }) => removeId === id.toString())
    : null;

  return (
    <div className="w-full">
      <table className="border-separate border-spacing-y-2 table-auto w-full text-sm">
        <thead>
          <tr className="py-2">
            <th className="text-left pl-2 py-2">ID</th>
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Description</th>
            <th className="text-left py-2">Price</th>
            <th className="text-left py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {products.map((p) => (
            <tr key={p.id}>
              <td className="py-4 pl-4">{p.id}</td>
              <td>{p.productName}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>
                <ProductAction onRemove={() => setRemoveId(p.id.toString())} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <RemoveProductModal
        id={removeId}
        productName={removableProduct?.productName}
        onClose={() => setRemoveId(null)}
      />
    </div>
  );
};
export default ProductTable;
