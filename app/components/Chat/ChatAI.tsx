'use client'
import Image from "next/image";
import { Button } from "../Button/Button";
import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";
import { Textarea } from "../Form/Textarea";
import paperPlane from '@/app/assets/icon/paperPlane.svg'
import signout from '@/app/assets/icon/signout.svg'
import chatIcon from '@/app/assets/icon/chat.png'
import { Dispatch, SetStateAction, useState } from "react";
import { MessageAI } from "./ChatWrapper";

type Props = {
  setModal: Dispatch<SetStateAction<boolean>>
  handleSubmit: (e: React.SyntheticEvent) => Promise<void>;
  handleInput: (e: React.SyntheticEvent) => void;
  data: MessageAI[];
  loading: boolean;
}

const ChatAI: React.FC<Props> = ({
  setModal,
  loading,
  handleSubmit,
  handleInput,
  data
}) => {
  console.log(data)

  return (
    <>
      <Flex variant={'col'} className="h-screen w-[38rem] bg-white top-0 end-0 py-4 z-50 rounded-s-3xl shadow-lg fixed">
        {loading &&
          <span className="absolute left-1/2 right-1/2  top-1/2 opacity-30 loading loading-dots loading-lg"></span>
        }
        <Flex variant={'row'} align={'iCenter'} className="justify-between px-4">
          <figure className="flex items-center flex-row gap-3">
            <Image
              src={chatIcon}
              height={30}
              alt="Chat Icon"
            />
            <Heading variant={'five'}>Chat AI Bot</Heading>
          </figure>
          <Button onClick={() => setModal(false)} className="btn-sm">
            <Image src={signout} width={20} alt="Close Chat" />
          </Button>
        </Flex>
        <div className="divider my-0"></div>
        <Flex variant={'col'} className="px-4 overflow-y-scroll pb-10">

          {data?.map((item, index) => (

            <div key={index} className={`chat ${item.isBot ? 'chat-start' : 'chat-end'}`}>
              <div 
                className={`chat-bubble text-base-300 ${item.isBot ? 'bg-accent' : 'bg-base-200'}`}>
                  {item.text}
              </div>
            </div>
          ))}
          <div>`<p>Test</p>`</div>
        </Flex>
        <Flex variant={'col'} className=" absolute bottom-4">
          <div className="divider mt-0"></div>
          <form className="flex px-4 w-full relative">
            <Textarea
              name={'command'}
              onChange={handleInput}
              variant={'border'}
              size={'wide'}
              className="resize-y border-secondary"
              rows={3}
              placeholder="type a messages..."
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              className="absolute  p-0 h-fit end-8  bottom-0 z-10 border-none bg-transparent">
              <Image
                src={paperPlane}
                width={20}
                alt="Send" />
            </Button>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default ChatAI;