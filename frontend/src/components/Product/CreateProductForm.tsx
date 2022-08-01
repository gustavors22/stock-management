import Input from "../Input";

interface CreateProductFormProps {
  name: string;
  price: number;
  onChangeNameEvent: any;
  onChangePriceEvent: any;
}

export default function CreateProductForm(props: CreateProductFormProps) {
  return (
    <div className="w-full max-w-xs">
      <Input
        label="Produto"
        defaultValue={props.name}
        type="text"
        disabled={false}
        onChangeEvent={props.onChangeNameEvent}
      />
      <Input
        label="Preço"
        defaultValue={props.price}
        type="number"
        disabled={false}
        onChangeEvent={props.onChangePriceEvent}
      />
    </div>
  );
}
