import { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import ButtonModalToggle from "../components/ButtonModalToggle";
import CreateProductStockForm from "../components/productStock/CreateProductStockForm";
import { ProductStocksDataTable } from "../components/productStock/ProductStocksDataTable";
import Layout from "../components/template/Layout";

const ProductStocks: NextPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [productId, setProductId] = useState(0);

  const handleCreateNewProductStock = async (event: FormEvent) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/api/product-stocks", {
      method: "POST",
      body: JSON.stringify({ quantity: quantity, product_id: productId }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => response.json());

    window.location.reload();
  };

  const createProductStockForm = () => (
    <CreateProductStockForm
      quantity={quantity}
      productId={productId}
      onChangeQuantityEvent={setQuantity}
      onChangeProductIdEvent={setProductId}
    />
  );

  const modalExtraButton = () => (
    <button
      className="rounded px-4 py-2 ml-4 text-white bg-green-500 "
      type="submit"
    >
      Criar
    </button>
  );

  return (
    <Layout
      title="Estoque De Produtos"
      subtitle="Gerenciamento de Produtos no estoque"
    >
      <div className="flex justify-end mb-4">
        <ButtonModalToggle
          color="yellow"
          form={createProductStockForm()}
          modalExtraButton={modalExtraButton()}
          submitFormModalEvent={handleCreateNewProductStock}
        >
          Cadastrar Estoque de Produtos
        </ButtonModalToggle>
      </div>
      <ProductStocksDataTable />
    </Layout>
  );
};

export default ProductStocks;
