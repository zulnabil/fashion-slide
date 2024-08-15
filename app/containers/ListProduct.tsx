import CircleSliderProduct from "../components/CircleSliderProduct";
import { ProductService } from "~/app/services/product";
import { BASE_API_URL } from "~/app/constants/config";

export default async function ListProduct() {
  const productService = new ProductService(BASE_API_URL);
  const { data } = await productService.getProducts();
  return <CircleSliderProduct products={data} />;
}
