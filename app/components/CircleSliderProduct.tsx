"use client";

import Image from "next/image";
import "./styles/CircleSliderProduct.scss";
import { FashionItem } from "~/app/types/feature";
import { useState, useRef } from "react";

interface CircleSliderProductProps {
  products: FashionItem[];
}

export default function CircleSliderProduct({
  products,
}: CircleSliderProductProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickProduct =
    (index: number) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });

      setActiveIndex(index);
    };

  return (
    <div className="circle-slider">
      {products.map((product, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={`${product.id}-${index}`}
            className={`circle-slider__item${
              isActive ? " circle-slider__item--active" : ""
            }`}
            onClick={handleClickProduct(index)}
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
