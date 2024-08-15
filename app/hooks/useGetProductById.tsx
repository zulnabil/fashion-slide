"use client";

import { useEffect, useState } from "react";
import { productService } from "~/app/services/product";
import { FashionItem } from "../types/feature";

export default function useGetProductById(
  id: string,
  initialData: FashionItem | null = null
) {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    if (!id) return;

    productService.getProductById(id).then(({ data }) => {
      setData(data);
    });
  }, [id]);

  return data;
}
