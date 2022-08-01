import { useEffect, useState } from "react";
import { ProductStockInterface } from "../../Interfaces/ProductStockInterface";

interface ProductStockSelectInputProps {
  defaultValue: any;
  onChangeOptionEvent: any;
}

export default function ProductStockSelectInput(
  props: ProductStockSelectInputProps
) {
  const [productStocks, setProductStocks] = useState<ProductStockInterface[]>(
    []
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product-stocks")
      .then((response) => response.json())
      .then((data) => setProductStocks(data));
  }, []);

  return (
    <>
      <label className="block text-gray-700  font-bold mb-2 w-full text-start">
        Selecione um Estoque de Produto
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
        {productStocks.map((productStock) => (
          <option value={productStock.id}>{productStock.product.name}</option>
        ))}
      </select>
    </>
  );
}
