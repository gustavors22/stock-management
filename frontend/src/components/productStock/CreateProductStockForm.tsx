import Input from "../Input";
import ProductSelectInput from "../product/ProductSelectInput";

interface CreateProductStockFormProps {
  quantity: number;
  productId: number;
  onChangeQuantityEvent: any;
  onChangeProductIdEvent: any;
}

export default function CreateProductStockForm(
  props: CreateProductStockFormProps
) {
  return (
    <div className="w-full max-w-xs">
      <div className="mb-2">
        <ProductSelectInput
          defaultValue={props.productId}
          onChangeOptionEvent={props.onChangeProductIdEvent}
        />
      </div>
      <Input
        label="Quantidade Inicial de Produtos"
        defaultValue={props.quantity}
        type="number"
        disabled={false}
        onChangeEvent={props.onChangeQuantityEvent}
      />
    </div>
  );
}
