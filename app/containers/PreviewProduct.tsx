"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useProduct } from "~/app/contexts/ProductContext";
import useGetProductById from "~/app/hooks/useGetProductById";
import "./styles/PreviewProduct.scss";

const STORY_DURATION = 5000; // 5 seconds per image

export default function PreviewProduct() {
  const {
    state: { activeProductId, products },
    dispatch,
  } = useProduct();
  const data = useGetProductById(activeProductId, products[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  function handleNextProduct() {
    const nextProductId = String(Number(activeProductId) + 1);
    dispatch({ type: "SET_ACTIVE_PRODUCT", payload: nextProductId });
  }

  useEffect(() => {
    if (!data?.images || data.images.length === 0) return;

    const totalDuration = STORY_DURATION * data.images.length;
    const interval = 16; // Update progress every 100ms
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      const newProgress = (elapsed / totalDuration) * 100;
      setProgress(newProgress);

      const nextImageIndex = Math.floor(elapsed / STORY_DURATION);

      if (nextImageIndex >= data.images.length) {
        clearInterval(timer);
        handleNextProduct(); // Call handleNextProduct when the last image is displayed
      } else {
        if (nextImageIndex !== currentImageIndex) {
          setCurrentImageIndex(nextImageIndex);
        }
      }
    }, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!data || !data.images || data.images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="preview-product">
      <div className="preview-product__progress-bar">
        {data.images.map((_, index) => (
          <div
            key={index}
            className="preview-product__progress-segment"
            style={{
              width: `${100 / data.images.length}%`,
              backgroundColor:
                index < currentImageIndex
                  ? "white"
                  : "rgba(255, 255, 255, 0.5)",
            }}
          >
            {index === currentImageIndex && (
              <div
                className="preview-product__progress-fill"
                style={{
                  width: `${
                    (progress % (100 / data.images.length)) * data.images.length
                  }%`,
                }}
              />
            )}
          </div>
        ))}
      </div>
      <h1>{data.title}</h1>
      <Image
        src={data.images[currentImageIndex]?.url || ""}
        alt={data.title || ""}
        fill
        objectFit="cover"
        className="preview-product__backdrop"
      />
      <div className="preview-product__blur-box" />
    </div>
  );
}
