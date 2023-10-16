'use client'
import Image from "next/image";
import { Heading } from "../Container/Heading";
import { Text } from "../Container/Text";
import closeIcon from '../../assets/icon/closeIcon.svg'
import { useEffect, useState } from "react";
import { Flex } from "../Container/Flex";
import axios from "axios";
import Transparent from "../Container/Transparent";
import { usePrevious } from "@/app/utils/customHooks";

interface CartCardProps {
  data: any;
  user: any;
  render: boolean;
  setRender: (state: boolean) => void;
}

const CartCard: React.FC<CartCardProps> = ({ data, user, setRender, render }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    quantity: data.quantity,
    dataId: ''
  })

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
      quantity: value,
      dataId: id
    });
  }
  const prevQuantity = usePrevious(state.quantity);
  useEffect(() => {
    if (prevQuantity !== state.quantity && state.dataId !== '') {
      setLoading(true);
      axios.patch(`/api/user/${user.userId}/cart/${state.dataId}`, state.quantity)
        .then((response) => {
          setState({
            ...state,
            quantity: response.data.quantity
          })
          setRender(!render)
          setTimeout(() => {
            setLoading(false);
          }, 1000)
        })
    }

  }, [state.quantity]);

  const options = [];
  if (productStock) {
    const loopCount = Math.min(productStock, 10);
    for (let i = 0; i < loopCount; i++) {
      options.push(i + 1);
    }
  }


  return (
    <>
      {loading
        ? <Transparent>
          <span className="loading loading-spinner loading-lg"></span>
        </Transparent>

        : <article className="flex flex-row relative gap-5">
          <Image
            className="absolute end-0 top-0"
            width={20}
            height={20}
            src={closeIcon} alt="close icon" />
          <figure className="w-1/3">
            <Image
              className="rounded-md md:rounded-lg"
              width={253}
              height={190}
              src={productImgLink} alt="product image" />
          </figure>
          <Flex variant={'col'} align={'between'} className="w-2/3 max-w-md">
            <Flex variant={'col'} className="gap-3">
              <Heading>{productName}</Heading>
              <Text className="capitalize">{`Color: ${productColor}`}</Text>
              <Text className="uppercase">{`Size: ${productSize}`}</Text>
            </Flex>

            <Flex variant={'col'} className="gap-3">
              <Heading>{`Rp${productPrice.toLocaleString('ID-id')}`}</Heading>
              <label className="flex flex-col">
                Quantity
                <select
                  value={state.quantity}
                  id={idCart}
                  onChange={(e) => handleQuantity(e)}
                  className="px-4 py-2 rounded-md w-full max-w-[5.4rem] mt-3"
                  name="selectQuantity">
                  {options?.map((data) =>
                    <option
                      key={data}
                      value={data}>{data}
                    </option>
                  )}
                </select>
              </label>
            </Flex>
          </Flex>
        </article>
      }
    </>
  );
};

export default CartCard;