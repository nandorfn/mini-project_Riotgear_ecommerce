'use client'
import Modal from "@/app/components/Modal/Modal";
import { ProductData, productFormState } from "@/app/utils/utils";
import axios from "axios";
import { getCookie } from "cookies-next";
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
    productMainCategory: editedData?.productMainCategory ?? '',
    productSubCategory: editedData?.productSubCategory ?? '',
    productImgLink: editedData?.productImgLink ?? '',
    productSize: editedData?.productSize ?? '',
    productColor: editedData?.productColor ?? '',
    productGender: editedData?.productGender ?? '',
    productStock: editedData?.productStock.toString() ?? '',
    productDesc: editedData?.productDesc ?? '',
    productPrice: editedData?.productPrice.toString() ?? '',
    featured: editedData?.featured ? 1 : 0,
  });
  const handleInput = (e: React.SyntheticEvent) => {
    const { name, value } = (e.target as HTMLInputElement);
    setProduct({
      ...product,
      [name]: value
    })
  }

  const token = getCookie('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const editData = async () => {
    const updatedProduct = {
      ...product,
      featured: product.featured !== 1,
      productStock: parseInt(product.productStock),
      productPrice: parseFloat(product.productPrice),
    };
    axios.patch(`/api/products/${editedData?.productId}`, updatedProduct, {
      headers: headers
    })
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