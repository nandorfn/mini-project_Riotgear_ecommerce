'use client'
import { useState } from "react";
import Input from "../Form/Input";
import { TextArea } from "../Form/TextArea";
import Button from "../Button/Button";
import { v4 as uuidv4 } from 'uuid';
import { createObject } from "@/app/utils/utils";

interface Props {
  setProductData: React.Dispatch<React.SetStateAction<any>>;
  handleModal: () => void;
}

const initialState = {
  productName: '',
  productMainCategory: '',
  productSubCategory: '',
  productImgLink: '',
  productStock: '',
  productDesc: '',
  productPrice: '',
};

const Modal: React.FC<Props> = ({ setProductData, handleModal }) => {
  const [form, setForm] = useState(initialState);
  const handleInput = (e: React.SyntheticEvent) => {
    const { name, value } = (e.target as HTMLInputElement);
    console.log(e.target as HTMLInputElement)
    setForm({
      ...form,
      [name]: value
    })
  }

  const sendData = () => {
    const id = uuidv4();
    const productStock = parseInt(form.productStock)
    const productPrice = parseInt(form.productPrice)
    const newProduct = createObject(
      id,
      form.productName,
      form.productMainCategory,
      form.productSubCategory,
      form.productImgLink,
      productStock,
      form.productDesc,
      productPrice
    )
    console.log(newProduct)
    setProductData(newProduct)
  }

  const handleSubmit = () => {
    sendData();
    setForm(initialState);
  }
  
  return (
    <>
      <div onClick={handleModal} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="absolute overflow-hidden top-[23.2rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form className="flex flex-col gap-3 mx-4 max-w-2xl w-[90vw] bg-base-200 p-4 rounded-xl">
          <h4>Add Product</h4>
          <Input
            name={'productName'}
            label={'Product Name'}
            value={form.productName}
            type={'text'}
            handleInput={handleInput}
            placeholder="Product Name"
          />
          <Input
            name={'productImgLink'}
            label={'Product Image Link'}
            value={form.productImgLink}
            type={'text'}
            handleInput={handleInput}
            placeholder="Link image product"
          />
          <Input
            name={'productStock'}
            label={'Product Stock'}
            type={'number'}
            value={form.productStock}
            handleInput={handleInput}
            placeholder="Product Stock"
          />
          <TextArea
            name={'productDesc'}
            label="Product Description"
            value={form.productDesc}
            handleInput={handleInput}
            error=""
          />
          <Input
            name={'productPrice'}
            label={'Product Price'}
            type={'number'}
            value={form.productPrice}
            handleInput={handleInput}
            placeholder="Product Price"
          />
          <div className="flex flex-row w-full justify-between">
            <Button handleClick={handleModal} label="Cancel" addClass="btn-info capitalize w-[48.5%]" />
            <Button handleClick={handleSubmit} label="Submit" addClass="btn-success capitalize w-[48.5%]" />
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Modal;