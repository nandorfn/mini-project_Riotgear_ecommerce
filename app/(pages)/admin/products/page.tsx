/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Input from "@/app/components/Form/Input";
import { headTableProduct } from "@/app/helpers/dataObject";
import { ProductData } from "@/app/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";
import FormProduct from "./FormProduct";
import FormEditProduct from "./FormEditProduct";
import { Button } from "@/app/components/Button/Button";
import TableBody from "@/app/components/Table/TableBody";
import Transparent from "@/app/components/Container/Transparent";

const Page: React.FC = () => {
  const [dataProducts, setDataProducts] = useState<ProductData[]>([])
  const [filteredData, setFilteredData] = useState<ProductData[]>([])
  const [editedProduct, setEditedProduct] = useState<ProductData>()
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState({
    editModal: false,
    addModal: false,
    loading: false
  })


  useEffect(() => {
    if (dataProducts.length === 0) {
      setModal((prevState) => ({
        ...prevState,
        loading: true
      }));
      axios.get('/api/products')
        .then(response => {
          const newDataProducts = [
            ...dataProducts,
            ...response.data
          ];
          setDataProducts(newDataProducts);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setModal((prevState) => ({
            ...prevState,
            loading: false
          }));
        })
    }
  }, []);

  const handleDelete = (id: string) => {
    setModal((prevState) => ({
      ...prevState,
      loading: true
    }));
    axios.delete(`/api/products/${id}`)
      .then(() => {
        const filteredProducts = [
          ...dataProducts.filter((product) =>
            product.productId !== id
          )];
        setDataProducts(filteredProducts)
      })
      .catch(error => { console.error(error) })
      .finally(() => {
        setModal((prevState) => ({
          ...prevState,
          loading: false
        }));
      });
  }

  const handleEdit = (id: string) => {
    const dataToEdit = [...dataProducts.filter((product) => product.productId === id)];
    setEditedProduct(dataToEdit[0]);
  };

  const handleInput = (e: React.SyntheticEvent) => {
    const { value } = (e.target as HTMLInputElement);
    setSearch(value)
    onFilter(value);
  }
  const handleAddModal = () => {
    setModal((prevState) => ({
      ...prevState,
      addModal: !prevState.addModal
    }));
  };
  const handleEditModal = () => {
    setModal((prevState) => ({
      ...prevState,
      editModal: !prevState.editModal
    }));
  };

  const onFilter = (query: string) => {
    let filter = dataProducts?.filter((item) =>
      item.productName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filter)
  }
  return (
    <>
      {modal.loading
        ? <Transparent>
          <span className="loading loading-spinner loading-lg"></span>
        </Transparent>
        :
        <section className="relative">
          <h2 className="text-2xl font-medium">List Products</h2>
          <div className="flex flex-row w-2/4 items-center gap-3 mt-2 mb-4">
            <Input
              name="Search"
              value={search}
              type="text"
              handleInput={handleInput}
              placeholder="Find products"
            />
            <Button
              className="mt-2"
              onClick={handleAddModal}
              variant={'success'} size={'base'} >Add Product
            </Button>
          </div>
          <div className="overflow-x-auto p-1 mt-3">
            <table className="table table-zebra bg-base-100">
              <thead>
                <tr>
                  {headTableProduct?.map((head, index) =>
                    <th key={index}>{head}</th>
                  )}
                </tr>
              </thead>
              <tbody className="text-base font-normal">
                {search === ""
                  ? <TableBody
                    dataMapping={dataProducts}
                    handleEdit={handleEdit}
                    handleEditModal={handleEditModal}
                    handleDelete={handleDelete}
                  />
                  : <TableBody
                    dataMapping={filteredData}
                    handleEdit={handleEdit}
                    handleEditModal={handleEditModal}
                    handleDelete={handleDelete}
                  />
                }
              </tbody>
            </table>
          </div>
          {modal.editModal &&
            <FormEditProduct
              dataProducts={dataProducts}
              setDataProducts={setDataProducts}
              editedData={editedProduct}
              handleModal={handleEditModal}
            />
          }
          {modal.addModal &&
            <FormProduct
              setDataProducts={setDataProducts}
              handleModal={handleAddModal}
            />
          }
        </section>
      }
    </>
  );
};

export default Page;