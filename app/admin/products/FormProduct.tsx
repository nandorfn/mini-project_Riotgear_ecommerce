'use client'
import { v4 as uuidv4 } from 'uuid';
import Modal from '@/app/components/Modal/Modal';
import useForm from "@/app/hooks/useForm";
import { createProductData, defaultProductData } from "@/app/helpers/dataObject";
import usePostData from '@/app/hooks/usePostData';
import { ProductData } from '@/app/utils/utils';
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
    handleInput
  } = useForm(defaultProductData);
  const id = uuidv4();
  const dataProduct = createProductData(form, id);
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