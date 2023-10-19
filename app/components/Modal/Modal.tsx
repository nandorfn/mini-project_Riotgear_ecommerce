'use client'
import './Modal.css'
import { colorCategory, featuredOption, genderCategory, mainCategory, sizeCategory, subCategory } from '@/app/helpers/dataObject';
import { productFormState } from '@/app/utils/utils';

import { Textarea } from "../Form/Textarea";
import Input from "../Form/Input";
import { Button } from '../Button/Button';
import OptionInput from '../Form/Option';
import { Flex } from '../Container/Flex';

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
            <label>
            Product Name
            <Input
              name={'productName'}
              value={form.productName}
              type={'text'}
              handleInput={handleInput}
              placeholder="Product Name"
            />
            </label>
            <label>
              Product Image
            <Input
              name={'productImgLink'}
              value={form.productImgLink}
              type={'text'}
              handleInput={handleInput}
              placeholder="Link image product"
            />
            </label>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
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
                label={"Featured"}
                name='featured'
                addClass="select-sm mt-3"
                value={form.featured}
                optionValue={featuredOption}
                handleInput={handleInput}
                error=''
              />
            </div>
            <label>
            Product Description
              <Textarea
                name={'productDesc'}
                value={form.productDesc}
              />
            </label>
            <div className='grid grid-cols-2 gap-4'>
              <label>
                Product Stock
                <Input
                  name={'productStock'}
                  type={'number'}
                  value={form.productStock}
                  handleInput={handleInput}
                  placeholder="Product Stock"
                />
              </label>
              <label>
                Product Price
                <Input
                  name={'productPrice'}
                  type={'number'}
                  value={form.productPrice}
                  handleInput={handleInput}
                  placeholder="Product Price"
                />
              </label>
            </div>
            <Flex variant={'row'} align={'between'}>
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
            </Flex>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;