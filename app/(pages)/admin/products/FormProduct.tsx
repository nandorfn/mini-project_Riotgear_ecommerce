'use client'
import { ProductData } from '@/app/utils/types';
import useForm from "@/app/hooks/useForm";
import usePostData from '@/app/hooks/usePostData';
import Modal from '@/app/components/Modal/Modal';
import { createProductData, defaultProductData } from "@/app/helpers/dataObject";
interface Props {
  setDataProducts: React.Dispatch<React.SetStateAction<ProductData[]>>;
  handleModal: () => void;
}
const FormProduct: React.FC<Props> = ({
  setDataProducts,
  handleModal,

}) => {
  const {
    form,
    setForm,
    handleInput,
  } = useForm(defaultProductData);
  const dataProduct = createProductData(form);
  const { sendData } = usePostData({
    setData: setDataProducts
  });
  
  const handleSubmit = () => {
    sendData(dataProduct);
    handleModal();
    setForm(defaultProductData);
  }
  return (
    <>
        <Modal
          handleInput={handleInput}
          handleModal={handleModal}
          handleSubmit={handleSubmit}
          form={form}
          label={"Add Product"}
        />
    </>
  );
};

export default FormProduct;