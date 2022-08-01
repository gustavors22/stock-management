import { useEffect, useState } from "react";
import { ProductStockInterface } from "../../Interfaces/ProductStockInterface";
import ButtonModalToggle from "../ButtonModalToggle";
import DeleteButton from "../DeleteButton";
import SeeProductStock from "./SeeProductStock";

export function ProductStocksDataTable() {
  const [productStocks, setProductStocks] = useState<ProductStockInterface[]>(
    []
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product-stocks")
      .then((response) => response.json())
      .then((data) => setProductStocks(data));
  }, []);

  const seeProductStock = (id: number | string) => (
    <SeeProductStock productId={id} />
  );

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Nome do Produto
            </th>
            <th scope="col" className="py-3 px-6">
              Quantidade
            </th>
            <th scope="col" className="py-3 px-6">
              Data de Criação
            </th>
            <th scope="col" className="py-3 px-6">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
          {productStocks.map((productStock) => (
            <tr
              key={productStock.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <td className="py-4 px-6">{productStock.id}</td>
              </th>
              <th>
                <td className="py-4 px-6">{productStock.product.name}</td>
              </th>
              <th>
                <td className="py-4 px-6">{productStock.quantity}</td>
              </th>
              <th>
                <td className="py-4 px-6">
                  {new Date(productStock.created_at).toLocaleDateString()}
                </td>
              </th>
              <th>
                <td className="py-4 px-6 text-right">
                  <ButtonModalToggle
                    color="green"
                    form={seeProductStock(productStock.id)}
                  >
                    Ver
                  </ButtonModalToggle>
                </td>
                <td className="py-4 px-6 text-right">
                  <DeleteButton
                    url={`http://127.0.0.1:8000/api/product-stocks/${productStock.id}`}
                  >
                    Deletar
                  </DeleteButton>
                </td>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
