import { useEffect, useState } from "react";
import { ProductStockInterface } from "../../Interfaces/ProductStockInterface";
import Input from "../Input";

interface SeeProductStockProps {
  productStockId: number | string;
}

export default function SeeProductStock(props: SeeProductStockProps) {
  const [productStock, setProductStock] = useState<ProductStockInterface>();

  const formatDate = (date: any) => new Date(date).toLocaleDateString();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product-stocks/${props.productStockId}`)
      .then((response) => response.json())
      .then((data) => setProductStock(data));
  }, []);

  return (
    <>
      <div className="w-full max-w-xs">
        <form className="shadow-md rounded">
          <Input
            label="Produto"
            value={productStock?.product.name}
            type="text"
            disabled={true}
          />
          <Input
            label="Preço"
            value={productStock?.product.price}
            type="text"
            disabled={true}
          />
          <Input
            label="Quantidade No Estoque"
            value={productStock?.quantity}
            type="text"
            disabled={true}
          />
          <Input
            label="Data de Criação do Estoque"
            value={formatDate(productStock?.created_at)}
            type="text"
            disabled={true}
          />
        </form>
      </div>
    </>
  );
}
