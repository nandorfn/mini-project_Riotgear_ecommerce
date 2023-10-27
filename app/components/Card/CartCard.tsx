/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { usePrevious } from "@/app/hooks/usePrevious";
import { deleteData } from "@/app/utils/api";
import { cart } from "@/app/utils/types";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { Flex } from "@/app/components/Container/Flex";
import CartModal from "@/app/components/Modal/CartModal";
import closeIcon from '@/app/assets/icon/closeIcon.svg'
import { Transparent } from "@/app/components/Container/Transparent";

interface CartCardProps {
  data: cart;
  productCart: cart[];
  setProductCart: Dispatch<SetStateAction<cart[]>>;
}

  const CartCard: React.FC<CartCardProps> = ({ data, setProductCart, productCart }) => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState({
    quantity: data.quantity,
    dataId: '',
    loading: false,
  })
  
  const subTotalItem = data.productInfo.productPrice * state.quantity;
  const {
    productName,
    productImgLink,
    productColor,
    productSize,
    productPrice,
    productStock
  } = data.productInfo;
  const idCart = data.id.toString();

  const handleQuantity = (e: React.SyntheticEvent) => {
    const { value, id } = e.target as HTMLSelectElement;
    setState({
      ...state,
      quantity: Number(value),
      dataId: id
    });
  }
  
  const updateCartQuantity = (id: number, quantity: number) => {
    let items = [...productCart];
    const indexToEdit = items.findIndex((item) => item.id === id)
    let item = items[indexToEdit];
    item.quantity = quantity;
    items[indexToEdit] = item;
    setProductCart(items)    
  }
  
  const deleteCart = (id: number) => {
    let carts = [...productCart];
    const indexToDelete = carts.findIndex((item) => item.id === id);
    
    if (indexToDelete !== -1) {
      carts.splice(indexToDelete, 1);
      setProductCart(carts);
    }
    
  }
  
  const prevQuantity = usePrevious(state.quantity);
  const queryProduct = `/api/carts`
  useEffect(() => {
    if (prevQuantity !== state.quantity && state.dataId !== '') {
      setState({
        ...state,
        loading: true
      })
      axios.patch(`${queryProduct}/${state.dataId}`, state.quantity)
        .then((response) => {
          setState({
            ...state,
            loading: false
          })
          updateCartQuantity(response.data.id, response.data.quantity)
        })
    }

  }, [state.quantity]);

  const handleDelete = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { id } = e.target as HTMLImageElement;
    setState({
      ...state,
      loading: true
    })
    await deleteData(`${queryProduct}/${id}`)
      .then((res) => {
        if (res.status === 200) {
          deleteCart(res.data.id)
        } else {
          alert('Failed to delete product')
        }
      })
      .finally(() => {
        setState({
          ...state,
          loading: false
        })
      })

  }

  const options = [];
  if (productStock) {
    const loopCount = Math.min(productStock, 10);
    for (let i = 0; i < loopCount; i++) {
      options.push(i + 1);
    }
  }


  return (
    <>
      {state.loading
        ? <Transparent>
          <span className="loading loading-spinner loading-lg"></span>
        </Transparent>

        : <article className="flex flex-row relative gap-5 border-b pb-5">
          <button
            className="absolute end-0 top-0" onClick={() => setModal(true)}>
            <Image
              width={20}
              height={20}
              src={closeIcon} alt="close icon" />
          </button>
          <figure className="w-1/3">
            <Image
              className="rounded-md md:rounded-lg"
              width={253}
              height={190}
              src={productImgLink} alt="product image" />
          </figure>
          <Flex variant={'col'} align={'between'} className="w-2/3">
            <Flex variant={'col'} className="md:gap-3 pe-6">
              <Heading className="line-clamp-2">{productName}</Heading>
              <Text className="capitalize">{`Color: ${productColor}`}</Text>
              <Text className="uppercase">{`Size: ${productSize}`}</Text>
            </Flex>

            <Flex variant={'col'} className="md:gap-3">
              <Heading>{`Rp${productPrice.toLocaleString('ID-id')}`}</Heading>
              <Flex variant={'row'}>
                <label className="flex flex-col">
                  Quantity
                  <select
                    value={state.quantity}
                    id={idCart}
                    onChange={(e) => handleQuantity(e)}
                    className="px-4 py-2 rounded-md w-full max-w-[5.4rem] md:mt-3"
                    name="selectQuantity">
                    {options?.map((data) =>
                      <option
                        key={data}
                        value={data}>{data}
                      </option>
                    )}
                  </select>
                </label>
                <Flex className=" justify-end items-end">
                  <h1 className="md:font-medium md:text-md">{`SUBTOTAL: Rp${subTotalItem.toLocaleString('ID-id')}`}</h1>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </article>
      }
      {modal &&
        <CartModal
          id={idCart}
          loading={state.loading}
          setModal={setModal}
          modal={modal}
          action={handleDelete}
          title="REMOVE ITEM"
          btnLeft="REMOVE"
          btnRight="CANCEL">
          <Heading variant={'five'} bold={'normal'}>Are you sure you want to remove this item from your cart?</Heading>
        </CartModal>

      }
    </>
  );
};

export default CartCard;