import { NextRequest } from "next/server"
import { products } from "~/app/constants/data"
import { FashionItem } from "~/app/types/feature"

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const productsMap = getProductsMap()
  const product = productsMap[id]

  if (!product) {
    return Response.json(
      { error: "Not found" },
      {
        status: 404,
      }
    )
  }
  return Response.json({
    product,
  })
}

// Create a function to get or create the products map
function getProductsMap(): { [key: string]: FashionItem } {
  if ((global as any).productsMap) {
    return (global as any).productsMap
  }

  const map: { [key: string]: FashionItem } = {}
  products.forEach((product) => {
    map[product.id] = product
  })

  // Store in global to persist across requests
  ;(global as any).productsMap = map

  return map
}
