import type { NextPage } from "next";
import ButtonModalToggle from "../components/ButtonModalToggle";
import CreateProduct from "../components/Product/CreateProduct";
import { ProductsDataTable } from "../components/Product/ProductsDataTable";
import Layout from "../components/template/Layout";

const Products: NextPage = () => {
  const createProduct = () => <CreateProduct />;
  const modalExtraButton = () => (
    <button className="rounded px-4 py-2 ml-4 text-white bg-green-500 ">
      Criar
    </button>
  );

  return (
    <Layout title="Produtos" subtitle="estamos desenvolvendo">
      <div className="flex justify-end mb-4">
        <ButtonModalToggle
          color="yellow"
          form={createProduct()}
          modalExtraButton={modalExtraButton()}
        >
          Cadastrar Produto
        </ButtonModalToggle>
      </div>
      <ProductsDataTable />
    </Layout>
  );
};

export default Products;
