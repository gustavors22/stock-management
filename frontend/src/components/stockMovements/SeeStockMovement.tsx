import { useEffect, useState } from "react";
import { StockMovementsInterface } from "../../Interfaces/StockMovementsInterface";
import Input from "../Input";

interface SeeStockMovementProps {
  stockMovementId: number | string;
}

export default function SeeStockMovement(props: SeeStockMovementProps) {
  const [stockMovement, setStockMovement] = useState<StockMovementsInterface>();

  const formatDate = (date: any) => new Date(date).toLocaleDateString();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/stock-movements/${props.stockMovementId}`)
      .then((response) => response.json())
      .then((data) => setStockMovement(data));
  }, []);

  return (
    <>
      <div className="w-full max-w-xs">
        <form className="shadow-md rounded">
          <Input
            label="Produto"
            value={stockMovement?.product_stock.product.name}
            type="text"
            disabled={true}
          />
          <Input
            label="Tipo de Movimentação"
            value={stockMovement?.type_stock_movement.description}
            type="text"
            disabled={true}
          />
          <Input
            label="Quantidade Movimentada"
            value={stockMovement?.quantity}
            type="text"
            disabled={true}
          />
          <Input
            label="Quantidade Total No Estoque"
            value={stockMovement?.product_stock.quantity}
            type="text"
            disabled={true}
          />
          <Input
            label="Data da Movimentação"
            value={formatDate(stockMovement?.created_at)}
            type="text"
            disabled={true}
          />
        </form>
      </div>
    </>
  );
}
