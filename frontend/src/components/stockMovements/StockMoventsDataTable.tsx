import { useEffect, useState } from "react";
import { ProductInterface } from "../../Interfaces/ProductInterface";
import { StockMovementsInterface } from "../../Interfaces/StockMovementsInterface";
import { TypeStockMovementInterface } from "../../Interfaces/TypeStockMovementInterface";
import ButtonModalToggle from "../ButtonModalToggle";
import DeleteButton from "../DeleteButton";
import SeeStockMovement from "./SeeStockMovement";

export function StockMoventsDataTable() {
  const [stockMovements, setStockMovements] = useState<
    StockMovementsInterface[]
  >([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/stock-movements")
      .then((response) => response.json())
      .then((data) => setStockMovements(data));
  }, []);

  const seeStockMovement = (id: number | string) => (
    <SeeStockMovement stockMovementId={id} />
  );

  return (
    <div className="overflow-y-scroll h-96 relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left overflow-scroll text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Nome do Produto
            </th>
            <th scope="col" className="py-3 px-6">
              Quantidade Movimentada
            </th>
            <th scope="col" className="py-3 px-6">
              Tipo de Movimentação
            </th>
            <th scope="col" className="py-3 px-6">
              Data da Movimentação
            </th>
            <th scope="col" className="py-3 px-6">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
          {stockMovements.map((stockMovement) => (
            <tr
              key={stockMovement.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <td className="py-4 px-6">{stockMovement.id}</td>
              </th>
              <th>
                <td className="py-4 px-6">
                  {stockMovement.product_stock.product.name}
                </td>
              </th>
              <th>
                <td className="py-4 px-6">{stockMovement.quantity}</td>
              </th>
              <th>
                <td className={`py-4 px-6`}>
                  <span
                    className={`inline  ${
                      stockMovement.type_stock_movement_id == 1
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {stockMovement.type_stock_movement.description}
                  </span>
                </td>
              </th>
              <th>
                <td className="py-4 px-6">
                  {new Date(stockMovement.created_at).toLocaleDateString()}
                </td>
              </th>
              <th>
                <td className="py-4 px-6 text-right">
                  <ButtonModalToggle
                    color="green"
                    form={seeStockMovement(stockMovement.id)}
                  >
                    Ver
                  </ButtonModalToggle>
                </td>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
