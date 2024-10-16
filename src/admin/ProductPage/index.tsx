import type { Product } from "./ProductTable";
import ProductTable from "./ProductTable";

const ProductPage = ({ products }: { products: Product[]}) => {
  return (
    <ProductTable products={products} /> 
  )
};

export default ProductPage;
