import { NextPage } from "next";
import ButtonModalToggle from "../components/ButtonModalToggle";
import { ProductStocksDataTable } from "../components/productStock/ProductStocksDataTable";
import Layout from "../components/template/Layout";

const ProductStocks: NextPage = () => {
  return (
    <Layout
      title="Estoque De Produtos"
      subtitle="Gerenciamento de Produtos no estoque"
    >
      <div className="flex justify-end mb-4">
        {/* <ButtonModalToggle
          color="yellow"
          form={createProductForm()}
          modalExtraButton={modalExtraButton()}
          submitFormModalEvent={handleCreateNewProduct}
        >
          Cadastrar Produto
        </ButtonModalToggle> */}
      </div>
      <ProductStocksDataTable />
    </Layout>
  );
};

export default ProductStocks;
