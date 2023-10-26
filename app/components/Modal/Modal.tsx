'use client'
import './Modal.css'
import {
  colorCategory,
  featuredOption,
  genderCategory,
  mainCategory,
  sizeCategory,
  subCategoryOption
} from '@/app/helpers/dataObject';
import { productFormState } from '@/app/utils/types';

import { Textarea } from "@/app/components/Form/Textarea";
import Input from "@/app/components/Form/Input";
import { Button } from '@/app/components/Button/Button';
import OptionInput from '@/app/components/Form/Option';
import { Flex } from '@/app/components/Container/Flex';
import { Heading } from '@/app/components/Container/Heading';

interface Props {
  handleInput: (e: React.SyntheticEvent) => void;
  handleModal: () => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
  form: productFormState;
  label: string;
  loading?: boolean;
}
const Modal: React.FC<Props> = ({
  handleInput,
  handleModal,
  handleSubmit,
  form,
  label,
  loading,
}) => {
  const filteredSubCategoryOptions = subCategoryOption.filter(subcategory => subcategory.type === form.productMainCategory);
  return (
    <>
      <div className="inset-0 bg-opacity-50 bg-black bgModal">
        <div className="modalWrapper">
          <form className="form__add-product bg-base-200">
            <Heading variant={'five'}>{label}</Heading>
            <label className='font-medium'>
              Product Name
              <Input
                name={'productName'}
                value={form.productName}
                type={'text'}
                handleInput={handleInput}
                placeholder="Product Name"
                required
              />
            </label>
            <label className='font-medium'>
              Product Image
              <Input
                name={'productImgLink'}
                value={form.productImgLink}
                type={'text'}
                handleInput={handleInput}
                placeholder="Link image product"
                required
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
                optionValue={filteredSubCategoryOptions}
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
            <label className='flex flex-col font-medium'>
              Product Description
              <Textarea
                onChange={handleInput}
                size={'standard'}
                name={'productDesc'}
                value={form.productDesc}
              />
            </label>
            <div className='grid grid-cols-2 gap-4'>
              <label className='font-medium'>
                Product Stock
                <Input
                  name={'productStock'}
                  type={'number'}
                  value={form.productStock}
                  handleInput={handleInput}
                  placeholder="Product Stock"
                />
              </label>
              <label className='font-medium'>
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
                disabled={loading}
                onClick={handleModal}
                variant={'info'}
                size={'half'}
              >CANCEL
              </Button>
              <Button
                disabled={loading}
                onClick={handleSubmit}
                variant={'success'}
                size={'half'}
              >
                {loading
                  ? <span className="loading loading-spinner"></span>
                  : 'SUBMIT'
                }
              </Button>
            </Flex>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;