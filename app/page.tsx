import Image from "next/image"
import CircleSliderProduct from "~/app/components/CircleSliderProduct"
import { products } from "~/app/constants/data"

export default function Home() {
  return (
    <main>
      <CircleSliderProduct products={products} />
    </main>
  )
}
