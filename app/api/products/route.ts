import { products } from "~/app/constants/data"

export async function GET() {
  return Response.json({
    products,
  })
}
