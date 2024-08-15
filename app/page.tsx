import ListProduct from "~/app/containers/ListProduct";
import { ProductProvider } from "~/app/contexts/ProductContext";
import { ProductService } from "~/app/services/product";
import { BASE_API_URL } from "./constants/config";
import PreviewProduct from "./containers/PreviewProduct";

export default async function Home() {
  const productService = new ProductService(BASE_API_URL);
  const { data } = await productService.getProducts();
  return (
    <main>
      <ProductProvider initialValue={{ products: data }}>
        <PreviewProduct />
        <ListProduct />
      </ProductProvider>
    </main>
  );
}
