'use client'
import Image from "next/image";
import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";
import Rating from "../Container/Rating";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Textarea } from "../Form/Textarea";
import closeIcon from '@/app/assets/icon/closeIcon.svg'
import axios from "axios";

type RewiewProps = {
  data: any,
  itemId: string,
  modal: boolean,
  setState: Dispatch<SetStateAction<{ itemId: string; modal: boolean; }>>
}
type SentData = {
  id: string,
  rating: number,
  review: string,
}

const ReviewModal = ({ data, itemId, setState, modal }: RewiewProps) => {
  const matchingOrderItem = data.orderItem.filter((item: any) => item.orderId === itemId);
  const [sentData, setSentData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleRatingChange = (id: string, newRating: number) => {
    const updatedData = sentData.map((item) =>
      item.id === id ? { ...item, rating: newRating } : item
    );
    
    setSentData(updatedData);
  };

  const handleRatingText = (e: React.SyntheticEvent) => {
    let { name, value } = e.target as HTMLTextAreaElement;
    const updatedData = sentData.map((item) =>
    item.id === name ? { ...item, review: value } : item
  );
  setSentData(updatedData);

  }
  const closeModal = () => {
    setState((prevState) => ({
      ...prevState,
      modal: false,
    }))
  }

  const submitReview = async (e: React.SyntheticEvent) => {
    try {
      setLoading(true);
      const newRating = {
        orderId: data.orderId,
        orderItems: sentData
      };
      await axios.post(`/api/review/${data.orderId}`, newRating)      
    } catch (error) {
      console.log(error);
    } finally {
      closeModal();
      setLoading(false);
    }
  };
  

  useEffect(() => {
    const initialData = matchingOrderItem.map((item: any) => ({
      id: item.productId,
      rating: 5,
      review: ''
    }));
    setSentData(initialData);
  }, []);

  return (
    <>
      <Flex variant={'col'} className="fixed max-w-md left-1/2 right-1/2 -translate-x-56 h-fit bg-base-100 shadow-lg p-5 rounded-lg z-50 gap-6">
        <Flex align={'between'}>
          <Heading variant={'five'}>Reviews</Heading>
          <button onClick={closeModal}>
            <Image
              src={closeIcon}
              width={20}
              height={20}
              alt="Close"
            />
          </button>
        </Flex>
        <ul className="flex flex-col gap-3">
          {matchingOrderItem?.map((item: any) => (
            <li className="flex flex-col gap-3" key={item.id}>
              <Flex variant={'row'} className=" gap-3">
                <Image
                  src={item.productImgLink}
                  width={100}
                  height={100}
                  alt="Product Image" />
                <Flex variant={'col'}>
                  <Heading className="line-clamp-2">{item.productName}</Heading>
                  <Rating
                    itemId={item.productId}
                    maxRating={5}
                    initialRating={sentData.find((data: SentData) => data.id === item.productId)?.rating || 5}
                    onRatingChange={(itemId, rating) => {
                      handleRatingChange(itemId, rating);
                    }}
                  />
                </Flex>
              </Flex>
              <Textarea
                name={item.productId}
                onChange={handleRatingText}
                value={sentData.find((data: SentData) => data.id === item.productId)?.review || ''}
                variant={'border'}
                placeholder="Come on, tell us your satisfaction about the quality of goods & services"
              />
            </li>
          ))}
        </ul>
        
        <Button 
          disabled={loading} 
          onClick={submitReview} 
          variant={'success'} 
          size={'full'}
          className=" disabled:opacity-50">
        {loading 
        ? <span className="loading loading-spinner"></span>
        : 'Submit'
        }
        </Button>

      </Flex>
    </>
  );
};

export default ReviewModal;