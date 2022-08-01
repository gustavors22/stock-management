import { useEffect, useState } from "react";
import { ProductInterface } from "../../Interfaces/ProductInterface";
import ButtonModalToggle from "../ButtonModalToggle";
import DeleteButton from "../DeleteButton";
import SeeProduct from "./SeeProduct";

export function ProductsDataTable() {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const seeProduct = (id: number | string) => <SeeProduct productId={id} />;

  return (
    <div className="overflow-y-scroll h-96 relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left overflow-scroll text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Nome do Produto
            </th>
            <th scope="col" className="py-3 px-6">
              Preço
            </th>
            <th scope="col" className="py-3 px-6">
              Data de Criação
            </th>
            <th scope="col" className="py-3 px-6">
              Data de Modificação
            </th>
            <th scope="col" className="py-3 px-6">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <td className="py-4 px-6">{product.id}</td>
              </th>
              <th>
                <td className="py-4 px-6">{product.name}</td>
              </th>
              <th>
                <td className="py-4 px-6">{`R$ ${product.price}`}</td>
              </th>
              <th>
                <td className="py-4 px-6">
                  {new Date(product.created_at).toLocaleDateString()}
                </td>
              </th>
              <th>
                <td className="py-4 px-6">
                  {new Date(product.updated_at).toLocaleDateString()}
                </td>
              </th>
              <th>
                <td className="py-4 px-6 text-right">
                  <ButtonModalToggle
                    color="green"
                    form={seeProduct(product.id)}
                  >
                    Ver
                  </ButtonModalToggle>
                </td>
                <td className="py-4 px-6 text-right">
                  <DeleteButton
                    url={`http://127.0.0.1:8000/api/products/${product.id}`}
                  >
                    Deletar
                  </DeleteButton>
                </td>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
