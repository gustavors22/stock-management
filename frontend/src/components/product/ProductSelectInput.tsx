import { useEffect, useState } from "react";
import { ProductInterface } from "../../Interfaces/ProductInterface";

interface ProductSelectInputProps {
  defaultValue: any;
  onChangeOptionEvent: any;
}

export default function ProductSelectInput(props: ProductSelectInputProps) {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <label className="block text-gray-700  font-bold mb-2 w-full text-start">
        Selecione um Produto
      </label>
      <select
        className={`
        bg-gray-50 border border-gray-300 text-gray-900
         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
        block w-full p-2.5
        `}
        defaultValue={props.defaultValue}
        onChange={(e) => props.onChangeOptionEvent(e.target.value)}
        required
      >
        <option selected>Selecione um Produto</option>
        {products.map((product) => (
          <option value={product.id}>{product.name}</option>
        ))}
      </select>
    </>
  );
}
