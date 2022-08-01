import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import ButtonModalToggle from "../components/ButtonModalToggle";
import CreateProductForm from "../components/product/CreateProductForm";

import { ProductsDataTable } from "../components/product/ProductsDataTable";
import Layout from "../components/template/Layout";

const Products: NextPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleCreateNewProduct = async (event: FormEvent) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => response.json());

    window.location.reload();
  };

  const createProductForm = () => (
    <CreateProductForm
      name={name}
      price={price}
      onChangeNameEvent={setName}
      onChangePriceEvent={setPrice}
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
    <Layout title="Produtos" subtitle="estamos desenvolvendo">
      <div className="flex justify-end mb-4">
        <ButtonModalToggle
          color="yellow"
          form={createProductForm()}
          modalExtraButton={modalExtraButton()}
          submitFormModalEvent={handleCreateNewProduct}
        >
          Cadastrar Produto
        </ButtonModalToggle>
      </div>
      <ProductsDataTable />
    </Layout>
  );
};

export default Products;
