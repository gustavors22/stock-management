import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import ButtonModalToggle from "../components/ButtonModalToggle";
import CreateStockMovementForm from "../components/stockMovements/CreateStockMovementForm";

import { StockMoventsDataTable } from "../components/stockMovements/StockMoventsDataTable";
import Layout from "../components/template/Layout";

const StockMovements: NextPage = () => {
  const [productStockId, setProductStockId] = useState("");
  const [typeStockMovementId, setTypeStockMovementId] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() =>
    console.log(`
    prodStock ${productStockId},
    typeMov ${typeStockMovementId}
    quantity ${quantity}
  `)
  );

  const handleCreateNewStockMovent = async (event: FormEvent) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/api/stock-movements", {
      method: "POST",
      body: JSON.stringify({
        product_stock_id: productStockId,
        type_stock_movement_id: typeStockMovementId,
        quantity: quantity,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => response.json());

    window.location.reload();
  };

  const createStockMovementForm = () => (
    <CreateStockMovementForm
      productStockId={productStockId}
      typeStockMovementId={typeStockMovementId}
      quantity={quantity}
      onChangeProductStockIdEvent={setProductStockId}
      onChangeTypeStockMovementIdEvent={setTypeStockMovementId}
      onChangeQuantityEvent={setQuantity}
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
      title="Movimentações de Estoque"
      subtitle="Gerenciamento das Movimentaçoes dos Estoques"
    >
      <div className="flex justify-end mb-4">
        <ButtonModalToggle
          color="yellow"
          form={createStockMovementForm()}
          modalExtraButton={modalExtraButton()}
          submitFormModalEvent={handleCreateNewStockMovent}
        >
          Cadastrar uma Movimentação
        </ButtonModalToggle>
      </div>
      <StockMoventsDataTable />
    </Layout>
  );
};

export default StockMovements;
