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
    loading,
  } = useForm(defaultProductData);
  const dataProduct = createProductData(form);
  const { sendData, error } = usePostData({
    setData: setDataProducts
  });
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    sendData(dataProduct);
    if (!error) {
      handleModal();
      setForm(defaultProductData);
    } else {
      alert('Please input valid data, each input must be filled in');
    }
  }
  
  return (
    <>
        <Modal
          handleInput={handleInput}
          handleModal={handleModal}
          handleSubmit={handleSubmit}
          loading={loading}
          form={form}
          label={"Add Product"}
        />
    </>
  );
};

export default FormProduct;