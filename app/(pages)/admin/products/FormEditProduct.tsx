'use client'
import axios from "axios";
import useForm from "@/app/hooks/useForm";
import { ProductData } from "@/app/utils/types";
import Modal from "@/app/components/Modal/Modal";
import { defaultProductData } from "@/app/helpers/dataObject";

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
  const initialProductData = {
    ...defaultProductData,
    ...(editedData ?? {}),
    productStock: (editedData?.productStock) ? editedData.productStock.toString() : '',
    productPrice: (editedData?.productPrice) ? editedData.productPrice.toString() : '',
    featured: (editedData?.featured) ? 1 : 0,
  };  
  
  const {form, handleInput } = useForm(initialProductData);  
  
  const editData = async () => {
    const updatedProduct = {
      ...form,
      featured: Number(form.featured) === 1,
      productStock: parseInt(form.productStock),
      productPrice: parseFloat(form.productPrice),
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
        form={form}
        label={"Edit Product"}
      />
    </>
  );
};

export default FormEditProduct;