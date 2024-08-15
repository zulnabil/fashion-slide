"use client";

import Image from "next/image";
import { useProduct } from "~/app/contexts/ProductContext";
import useGetProductById from "~/app/hooks/useGetProductById";
import "./styles/PreviewProduct.scss";

export default function PreviewProduct() {
  const {
    state: { activeProductId, products },
  } = useProduct();
  const data = useGetProductById(activeProductId, products[0]);
  return (
    <div className="preview-product">
      {/* image as full background backdrop */}
      <h1>{data?.title}</h1>
      <Image
        src={data?.images[0]?.url || ""}
        alt={data?.title || ""}
        fill
        objectFit="cover"
        className="preview-product__backdrop"
      />
      <div className="preview-product__blur-box" />
      {/* <Image /> */}
    </div>
  );
}
