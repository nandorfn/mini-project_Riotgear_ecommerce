'use client'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import dots from '@/app/assets/icon/dots.svg'
import ReviewModal from "@/app/components/Modal/ReviewModal";
import { Transparent } from "@/app/components/Container/Transparent";
import { Heading } from "@/app/components/Container/Heading";
import CartModal from "@/app/components/Modal/CartModal";

const OrderStatus = ({ order }: { order: any }) => {
  const [orderItem, setOrderItem] = useState(order);
  const [modal, setModal] = useState(false);
  const [state, setState] = useState({
    itemId: '',
    modal: false,
    loading: false,
  })



  const handleConfirmOrder = async (e: React.SyntheticEvent) => {
    setState({
      ...state,
      loading: true,
    })
    e.preventDefault();
    const data = {
      orderId: order.orderId,
      status: 'Delivered'
    }
    await axios.patch(`/api/orders`, data)
      .then((res) => {
        setOrderItem({
          ...order,
          status: res.data.status
        })
      })
      .finally(() => {
        setState({
          ...state,
          loading: false,
        })
        setModal(false);
      })
  }

  const onReview = (e: React.SyntheticEvent) => {
    const { id } = e.target as HTMLButtonElement;
    setState({
      ...state,
      itemId: id,
      modal: true,
    });
  }
  return (
    <>
      {modal &&
        <CartModal
          loading={state.loading}
          setModal={setModal}
          modal={modal}
          action={handleConfirmOrder}
          title="COMPLETE THE ORDER"
          btnLeft="YES"
          btnRight="NO">
          <Heading variant={'five'} bold={'normal'}>Are you sure your purchases have arived?</Heading>
        </CartModal>

      }

      {state.modal &&
        <Transparent>
          <ReviewModal
            modal={state.modal}
            data={orderItem}
            itemId={state.itemId}
            setState={setState}
            setOrderItem={setOrderItem}
          />
        </Transparent>
      }
      <details className="dropdown md:hidden dropdown-top dropdown-end absolute z-30 end-5 bottom-4 gap-5 justify-end">
        <summary className="m-1 btn btn-circle btn-md">
          <Image
            src={dots}
            width={20}
            alt="dots icon"
          />
        </summary>
        <ul className="menu dropdown-content items-end z-[1] shadow mb-2 bg-base-100 rounded-box">
          <li>
            <Link className=" whitespace-nowrap p-0" href={`/store/payment?orderId=${orderItem.orderId}`}>
              <Button size={'sm'} >View Transaction Details</Button>
            </Link>
          </li>
          {orderItem.status === 'Shipped' &&
            <li className="mt-2">
              <Button onClick={() => setModal(true)} size={'sm'} variant={'success'}>
                Recieve Order
              </Button>
            </li>
          }
          {!orderItem.isReviewed && (orderItem.status === 'Delivered' || orderItem.status === 'Completed') && (
            <Button id={order.orderId} size={'sm'} variant={'success'} className="mt-2" onClick={onReview}>Add review</Button>
          )}
        </ul>
      </details>

      <Flex variant={'row'} className="hidden md:flex w-fit absolute z-30 end-5 bottom-4 gap-5 justify-end">
        <Link href={`/store/payment?orderId=${orderItem.orderId}`}>
          <Button size={'sm'} >View Transaction Details</Button>
        </Link>
        {orderItem.status === 'Shipped' &&
          <Button onClick={() => setModal(true)} size={'sm'} variant={'success'}>
            Recieve Order
          </Button>
        }
        {!orderItem.isReviewed && (orderItem.status === 'Delivered' || orderItem.status === 'Completed') && (
          <Button id={order.orderId} size={'sm'} variant={'success'} onClick={onReview}>Add review</Button>
        )}

      </Flex>
    </>
  );
};

export default OrderStatus;