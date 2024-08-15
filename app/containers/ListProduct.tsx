"use client";

import CircleSliderProduct from "../components/CircleSliderProduct";
import { useProduct } from "~/app/contexts/ProductContext";

export default function ListProduct() {
  const {
    state: { products, activeProductId },
    dispatch,
  } = useProduct();

  function handleChangeActiveId(id: string) {
    dispatch({ type: "SET_ACTIVE_PRODUCT", payload: id });
  }

  return (
    <CircleSliderProduct
      products={products}
      activeId={activeProductId}
      onChangeActiveId={handleChangeActiveId}
    />
  );
}
