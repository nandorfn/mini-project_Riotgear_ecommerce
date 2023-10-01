'use client'
import './Modal.css'
import { mainCategory, subCategory } from '@/app/data/faqData';
import { productFormState } from '@/app/utils/utils';

import { TextArea } from "../Form/TextArea";
import Input from "../Form/Input";
import Button from "../Button/Button";
import OptionInput from '../Form/Option';

interface Props {
  handleInput: (e: React.SyntheticEvent) => void;
  handleModal: () => void;
  handleSubmit: () => void;
  form: productFormState;
  label: string;
}
const Modal: React.FC<Props> = ({
  handleInput,
  handleModal,
  handleSubmit,
  form,
  label
}) => {

  
  return (
    <>
      <div className="inset-0 bg-opacity-50 bg-black bgModal">
      <div className="modalWrapper">
        <form className="form__add-product bg-base-200">
          <h4>{label}</h4>
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
          <div className='flex justify-between w-full gap-3'>
            <OptionInput
              label={"Main Category"}
              name='productMainCategory'
              optionLabel='Select'
              value={form.productMainCategory}
              optionValue={mainCategory}
              handleInput={handleInput}
              error=''
            />
            <OptionInput
              label={"Sub Category"}
              name='productSubCategory'
              optionLabel='Select'
              value={form.productSubCategory}
              optionValue={subCategory}
              handleInput={handleInput}
              error=''
            />
          </div>
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