import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductInterface } from "../Interfaces/ProductInterface";
import { api } from "../services/api";

type ProductInput = Omit<ProductInterface, "id" | "created_at" | "updated_at">;

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextProps {
  products: ProductInterface[];
  createproduct: (product: ProductInput) => Promise<void>;
}

const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export function productsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    api
      .get("products")
      .then((response: any) => setProducts(response.data.products));
  }, []);

  const createProduct = async (productInput: ProductInput) => {
    const response = await api.post("/products", {
      productInput,
    });

    const { product } = response.data;

    setProducts([...products, product]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        createProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
