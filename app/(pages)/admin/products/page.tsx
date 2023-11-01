/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState } from "react";

import FormProduct from "./FormProduct";
import FormEditProduct from "./FormEditProduct";
import { ProductData } from "@/app/utils/types";
import Input from "@/app/components/Form/Input";
import { Button } from "@/app/components/Button/Button";
import TableBody from "@/app/components/Table/TableBody";
import { headTableProduct } from "@/app/helpers/dataObject";
import { Transparent } from "@/app/components/Container/Transparent";
import { Flex } from "@/app/components/Container/Flex";
import useActionTable from "@/app/hooks/useActionTable";
import { ToastContainer } from "react-toastify";


const Page: React.FC = () => {
  const [dataProducts, setDataProducts] = useState<ProductData[]>([])
  const [filteredData, setFilteredData] = useState<ProductData[]>([])
  const [editedProduct, setEditedProduct] = useState<ProductData>()

  const {
    modal,
    search,
    handleInput,
    handleAddModal,
    handleEdit,
    handleEditModal,
    handleDelete
  } = useActionTable(
    dataProducts,
    setDataProducts,
    setFilteredData,
    setEditedProduct,
    '/api/products'
  )

  return (
    <>
      {modal.loading
        ? <Transparent>
          <span className="loading loading-spinner loading-lg"></span>
        </Transparent>
        :
        <section className="relative px-4 lg:px-0 z-0">
        <ToastContainer />
          <h2 className="text-2xl font-medium">List Products</h2>
          <div className="flex flex-row md:w-2/4 items-center gap-3 mt-2 mb-4">
            <Input
              name="Search"
              value={search}
              type="text"
              handleInput={handleInput}
              placeholder="Find products by name"
            />
            <Button
              className="mt-2"
              onClick={handleAddModal}
              variant={'success'} size={'base'} >ADD PRODUCT
            </Button>
          </div>
          <div className="stats mt-1 md:w-full">
          <Flex className="gap-3 breadcrumbs">
            <table className="table table-zebra table-xs md:table-md table-pin-rows table-pin-cols bg-base-100 ">
              <thead className="">
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
          </Flex>
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