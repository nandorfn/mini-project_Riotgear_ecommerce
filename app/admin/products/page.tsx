'use client'
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Form/Input";
import Table from "@/app/components/Table/Table";
import { headTableProduct } from "@/app/data/faqData";
import { ProductData } from "@/app/utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import FormProduct from "./FormProduct";
import FormEditProduct from "./FormEditProduct";

const Page: React.FC = () => {
  const [dataProducts, setDataProducts] = useState<ProductData[]>([])
  const [filteredData, setFilteredData] = useState<ProductData[]>([])
  const [editedProduct, setEditedProduct] = useState<ProductData>()
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState({
    editModal: false,
    addModal: false,
  })

  useEffect(() => {
    if (dataProducts.length === 0) {
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
        });
    }
  }, []); 
  
  const handleDelete = (id: string) => {
    axios.delete(`/api/products/${id}`)
    .then(() => {
      const filteredProducts = [
        ...dataProducts.filter((product) => 
        product.productId !== id
      )];
      setDataProducts(filteredProducts)
    })
    .catch(error => {console.error(error)});
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
      <section className="relative">
        <h2 className="text-2xl font-medium">List Products</h2>
        <div className="flex flex-row w-2/4 items-center gap-3 my-4">
          <Input
            name="Search"
            label={null}
            value={search}
            type="text"
            handleInput={handleInput}
            placeholder="Find products"
          />
          <Button
            label="Search product"
            addClass="btn-info capitalize"
          />
          <Button
            handleClick={handleAddModal}
            label="Add product"
            addClass="btn-success capitalize"
          />
        </div>
        <Table
          dataProducts={dataProducts}
          search={search}
          filteredData={filteredData}
          handleDelete={handleDelete}
          handleEditModal={handleEditModal}
          handleEdit={handleEdit}
          label=""
          headTable={headTableProduct}
        />
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
    </>
  );
};

export default Page;