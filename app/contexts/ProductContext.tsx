"use client";

import {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  useContext,
} from "react";
import { FashionItem } from "~/app/types/feature";

// Define the shape of our state
interface ProductState {
  products: FashionItem[];
  activeProductId: string;
}

// Define the shape of our actions
type ProductAction =
  | { type: "SET_ACTIVE_PRODUCT"; payload: string }
  | { type: "RESET_ACTIVE_PRODUCT" }; // Added this as an example of another action

// Define the shape of our context
interface ProductContextType {
  state: ProductState;
  dispatch: Dispatch<ProductAction>;
}

// Create the context with an initial undefined value
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// The reducer function
function productReducer(
  state: ProductState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case "SET_ACTIVE_PRODUCT":
      return {
        ...state,
        activeProductId: action.payload,
      };
    case "RESET_ACTIVE_PRODUCT":
      return {
        ...state,
        activeProductId: "",
      };
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

// Props for the ProductProvider component
interface ProductProviderProps {
  children: ReactNode;
  initialValue?: Partial<ProductState>;
}

export function ProductProvider({
  children,
  initialValue,
}: ProductProviderProps) {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    activeProductId: "1",
    ...initialValue,
  });

  const value = { state, dispatch };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}

export default ProductContext;
