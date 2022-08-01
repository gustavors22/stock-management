import Input from "../Input";
import ProductStockSelectInput from "../productStock/ProductStockSelectInput";
import TypeStockMovementSelectInput from "./TypeStockMovementSelectInput";

interface CreateStockMovementFormProps {
  productStockId: number | string;
  typeStockMovementId: number | string;
  quantity: number | string;
  onChangeProductStockIdEvent: any;
  onChangeTypeStockMovementIdEvent: any;
  onChangeQuantityEvent: any;
}

export default function CreateStockMovementForm(
  props: CreateStockMovementFormProps
) {
  return (
    <div className="w-full max-w-xs">
      <div className="mb-2">
        <ProductStockSelectInput
          defaultValue={props.productStockId}
          onChangeOptionEvent={props.onChangeProductStockIdEvent}
        />
      </div>
      <div className="mb-2">
        <TypeStockMovementSelectInput
          defaultValue={props.typeStockMovementId}
          onChangeOptionEvent={props.onChangeTypeStockMovementIdEvent}
        />
      </div>
      <Input
        label="Quantidade"
        defaultValue={props.quantity}
        type="number"
        disabled={false}
        onChangeEvent={props.onChangeQuantityEvent}
      />
    </div>
  );
}
