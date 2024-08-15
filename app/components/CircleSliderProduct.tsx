"use client";

import Image from "next/image";
import "./styles/CircleSliderProduct.scss";
import { FashionItem } from "~/app/types/feature";

interface CircleSliderProductProps {
  products: FashionItem[];
  activeId: string;
  onChangeActiveId: (id: string) => void;
}

export default function CircleSliderProduct({
  products,
  activeId,
  onChangeActiveId,
}: CircleSliderProductProps) {
  const handleClickProduct =
    (index: string) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });

      onChangeActiveId(index);
    };

  return (
    <div className="circle-slider">
      {products.map((product) => {
        const isActive = activeId === product.id;
        return (
          <div
            key={product.id}
            className={`circle-slider__item${
              isActive ? " circle-slider__item--active" : ""
            }`}
            onClick={handleClickProduct(product.id)}
          >
            <Image
              width="60"
              height="60"
              src={product.images[0].url}
              alt={product.title}
              className="circle-slider__image"
            />
          </div>
        );
      })}
    </div>
  );
}
