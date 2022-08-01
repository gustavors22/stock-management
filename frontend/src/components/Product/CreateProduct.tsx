import { useState } from "react";
import { ProductInterface } from "../../Interfaces/ProductInterface";
import Input from "../Input";

export default function CreateProduct() {
  const [product, setProduct] = useState<ProductInterface>();

  return (
    <div className="w-full max-w-xs">
      <form className="shadow-md rounded">
        <Input
          label="Produto"
          defaultValue={product?.name}
          type="text"
          disabled={false}
        />
        <Input
          label="Preço"
          defaultValue={product?.price}
          type="number"
          disabled={false}
        />
      </form>
    </div>
  );
}
