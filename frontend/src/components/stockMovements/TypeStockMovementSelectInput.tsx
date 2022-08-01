import { useEffect, useState } from "react";
import { StockMovementsInterface } from "../../Interfaces/StockMovementsInterface";
import { TypeStockMovementInterface } from "../../Interfaces/TypeStockMovementInterface";

interface TypeStockMovementSelectInputProps {
  defaultValue: any;
  onChangeOptionEvent: any;
}

export default function TypeStockMovementSelectInput(
  props: TypeStockMovementSelectInputProps
) {
  const [typeStockMovements, setTypeStockMovements] = useState<
    TypeStockMovementInterface[]
  >([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/type-stock-movements")
      .then((response) => response.json())
      .then((data) => setTypeStockMovements(data));
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
        {typeStockMovements.map((typeStockMovement) => (
          <option value={typeStockMovement.id}>
            {typeStockMovement.description}
          </option>
        ))}
      </select>
    </>
  );
}
