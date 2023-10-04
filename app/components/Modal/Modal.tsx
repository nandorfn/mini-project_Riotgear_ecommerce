'use client'
import './Modal.css'
import { colorCategory, featuredOption, genderCategory, mainCategory, sizeCategory, subCategory } from '@/app/helpers/dataObject';
import { productFormState } from '@/app/utils/utils';

import { TextArea } from "../Form/TextArea";
import Input from "../Form/Input";
import { Button } from '../Button/Button';
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
                addClass="select-sm mt-3"
                value={form.productMainCategory}
                optionValue={mainCategory}
                handleInput={handleInput}
                error=''
              />
              <OptionInput
                label={"Sub Category"}
                name='productSubCategory'
                addClass="select-sm mt-3"
                value={form.productSubCategory}
                optionValue={subCategory}
                handleInput={handleInput}
                error=''
              />
              <OptionInput
                label={"Size Chart"}
                name='productSize'
                addClass="select-sm mt-3"
                value={form.productSize}
                optionValue={sizeCategory}
                handleInput={handleInput}
                error=''
              />
              <OptionInput
                label={"Color"}
                name='productColor'
                addClass="select-sm mt-3"
                value={form.productColor}
                optionValue={colorCategory}
                handleInput={handleInput}
                error=''
              />
              <OptionInput
                label={"Gender"}
                name='productGender'
                addClass="select-sm mt-3"
                value={form.productGender}
                optionValue={genderCategory}
                handleInput={handleInput}
                error=''
              />
              <OptionInput
                label={"Gender"}
                name='productGender'
                addClass="select-sm mt-3"
                value={form.productGender}
                optionValue={featuredOption}
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
              <Button
                onClick={handleModal}
                variant={'info'}
                size={'half'}
              >Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                variant={'success'}
                size={'half'}
              >Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;