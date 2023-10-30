'use client'
import Image from "next/image";
import Markdown from "marked-react";
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Textarea } from "@/app/components/Form/Textarea";
import paperPlane from '@/app/assets/icon/paperPlane.svg'
import signout from '@/app/assets/icon/signout.svg'
import chatIcon from '@/app/assets/icon/chat.png'
import { Dispatch, SetStateAction } from "react";
import { MessageAI } from "./ChatWrapper";

type Props = {
  setModal: Dispatch<SetStateAction<boolean>>
  handleSubmit: (e: React.SyntheticEvent) => Promise<void>;
  handleInput: (e: React.SyntheticEvent) => void;
  data: MessageAI[];
  loading: boolean;
  command: string;
}

const ChatAI: React.FC<Props> = ({
  setModal,
  loading,
  handleSubmit,
  handleInput,
  data,
  command
}) => {
  return (
    <>
      <Flex variant={'col'} className=" h-full md:h-screen w-3/4 md:w-[38rem] bg-white top-0 end-0 py-4 z-50 rounded-s-3xl shadow-lg fixed">
        {loading &&
          <>
            <div className="absolute w-full h-screen opacity-50 blur-lg">
            </div>
            <span className="absolute z-[48] left-1/2 right-1/2  top-1/2 opacity-30 loading loading-dots loading-lg"></span>
          </>
        }
        <Flex variant={'row'} align={'iCenter'} className="justify-between px-4 pb-3">
          <figure className="flex items-center flex-row gap-3">
            <Image
              src={chatIcon}
              height={30}
              alt="Chat Icon"
            />
            <Heading variant={'five'}>Chat AI Bot</Heading>
          </figure>
          <Button onClick={() => setModal(false)} className="btn-sm z-50">
            <Image src={signout} width={20} alt="Close Chat" />
          </Button>
        </Flex>
        <div className="divider my-0"></div>
        <Flex variant={'col'} className="px-4 overflow-y-scroll mb-[8rem] pb-20">

          {data?.map((item: MessageAI, index: number) => {
            return (
              <div key={index} className={`chat ${item.isBot ? 'chat-start' : 'chat-end'}`}>
                <div
                  className={`chat-bubble text-base-300 ${item.isBot ? 'bg-accent' : 'bg-base-200'}`}>
                  <Markdown>
                    {item.text}
                  </Markdown>
                </div>
              </div>
            )
          })}
          <div>
          </div>
        </Flex>
        <Flex variant={'col'} className=" absolute bottom-4">
          <div className="divider mt-0"></div>
          <form className="flex px-4 w-full relative">
            <Textarea
              name={'command'}
              value={command}
              onChange={handleInput}
              variant={'border'}
              size={'wide'}
              className="resize-y border-info"
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