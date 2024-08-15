"use client";

import { useProduct } from "../contexts/ProductContext";
import useGetProductById from "../hooks/useGetProductById";

export default function PreviewProduct() {
  const {
    state: { activeProductId, products },
  } = useProduct();
  const data = useGetProductById(activeProductId, products[0]);
  return (
    <div>
      <h1>{data?.title}</h1>
      {/* <Image /> */}
    </div>
  );
}
