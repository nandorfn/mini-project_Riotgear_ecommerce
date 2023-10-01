'use client'
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Form/Input";
import Modal from "@/app/components/Modal/Modal";
import Table from "@/app/components/Table/Table";
import { headTableProduct } from "@/app/data/faqData";
import { ProductData } from "@/app/utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [dataProducts, setDataProducts] = useState<ProductData[]>([])
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (dataProducts.length === 0) {
      axios.get('/api/products')
        .then(response => {
          const newDataProducts = [...dataProducts, ...response.data];
          setDataProducts(newDataProducts);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [dataProducts]); 
  console.log(dataProducts);

  const handleInput = (e: React.SyntheticEvent) => {
    const { value } = (e.target as HTMLInputElement);
    setSearch(value)
  }
  const handleModal = () => {
    setIsOpen(!isOpen)
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
            handleClick={handleModal}
            label="Add product"
            addClass="btn-success capitalize"
          />
        </div>
        <Table
          dataProducts={dataProducts}
          label=""
          headTable={headTableProduct}
        />
        {isOpen &&
          <Modal
            setDataProducts={setDataProducts}
            handleModal={handleModal}
          />}
      </section>
    </>
  );
};

export default Page;