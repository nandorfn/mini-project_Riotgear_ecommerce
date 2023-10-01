'use client'
import Modal from "@/app/components/Modal/Modal";
import { ProductData, productFormState } from "@/app/utils/utils";
import axios from "axios";
import { useState } from "react";

interface Props {
  dataProducts: ProductData[];
  setDataProducts: React.Dispatch<React.SetStateAction<any>>
  editedData: ProductData | undefined;
  handleModal: () => void;
}

const FormEditProduct: React.FC<Props> = ({
  editedData,
  handleModal,
  setDataProducts,
  dataProducts
}) => {

  const [product, setProduct] = useState<productFormState>({
    productName: editedData?.productName ?? '',
    productImgLink: editedData?.productImgLink ?? '',
    productStock: editedData?.productStock.toString() ?? '',
    productMainCategory: editedData?.productMainCategory ?? '',
    productSubCategory: editedData?.productSubCategory ?? '',
    productDesc: editedData?.productDesc ?? '',
    productPrice: editedData?.productPrice.toString() ?? '',
  });

  const handleInput = (e: React.SyntheticEvent) => {
    const { name, value } = (e.target as HTMLInputElement);
    setProduct({
      ...product,
      [name]: value
    })
  }

  const editData = async () => {
    const updatedProduct = {
      ...product,
      productStock: parseInt(product.productStock),
      productPrice: parseFloat(product.productPrice),
    };
    axios.patch(`/api/products/${editedData?.productId}`, updatedProduct)
      .then(response => {
        const indexData = dataProducts.findIndex((product) =>
          product.productId === response.data.productId
        );

        if (indexData !== -1) {
          const currentData = [...dataProducts]
          currentData[indexData] = response.data;
          setDataProducts(currentData)
        } else {
          throw new Error("Product not found")
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSubmit = () => {
    editData();
    handleModal();
  }

  return (
    <>
      <Modal
        handleInput={handleInput}
        handleModal={handleModal}
        handleSubmit={handleSubmit}
        form={product}
        label={"Edit Product"}
      />
    </>
  );
};

export default FormEditProduct;