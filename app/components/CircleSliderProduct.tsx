"use client"

import Image from "next/image"
import "./styles/CircleSliderProduct.scss"
import { FashionItem } from "~/app/types/feature"
import { useEffect, useRef, useState } from "react"

interface CircleSliderProductProps {
  products: FashionItem[]
}

export default function CircleSliderProduct({
  products,
}: CircleSliderProductProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current
      const activeItem = slider.children[activeIndex] as HTMLElement
      if (activeItem) {
        const sliderCenter = slider.offsetWidth / 2
        const itemCenter = activeItem.offsetWidth / 2
        const activeItemLeft = activeItem.offsetLeft
        const scrollPosition = activeItemLeft - sliderCenter + itemCenter

        slider.scrollTo({ left: scrollPosition, behavior: "smooth" })
      }
    }
  }, [activeIndex])

  return (
    <div className="circle-slider-container">
      <div className="circle-slider" ref={sliderRef}>
        {products.map((product, index) => {
          const isActive = activeIndex === index
          return (
            <div
              key={product.id}
              className={`circle-slider__item ${
                isActive && "circle-slider__item--active"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                width="60"
                height="60"
                src={product.images[0].url}
                alt={product.title}
                className="circle-slider__image"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
