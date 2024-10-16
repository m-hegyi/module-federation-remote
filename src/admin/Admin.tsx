import { useState } from "react";
import ProductPage from "./ProductPage/index.tsx";
import LeftNavigation from "./LeftNavigation.tsx";
import type { Product } from "./ProductPage/ProductTable.tsx";
import Container from "./Container.tsx";

interface Props {
  data?: Product[]
}

const AdminPage = ({ data }: Props) => {
  const [currentPage] = useState("products")

  return (
    <div className="flex">
      <LeftNavigation />
      <Container title="Products" description="List of all the products">
        {currentPage === "products" && <ProductPage products={data || []} />}
      </Container>
    </div>
  )
};

export default AdminPage;
