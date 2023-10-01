'use client'
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Form/Input";
import Modal from "@/app/components/Modal/Modal";
import Table from "@/app/components/Table/Table";
import { headTableProduct } from "@/app/data/faqData";
import { useState } from "react";

const Page: React.FC = () => {
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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
          label=""
          headTable={headTableProduct}
        />
        {isOpen && <Modal handleModal={handleModal} setProductData={setProductData}/>}
      </section>
    </>
  );
};

export default Page;