'use client'
import chatIcon from '@/app/assets/icon/chat.png'
import { Button } from '../Button/Button';
import Image from 'next/image';
import ChatAI from './ChatAI';
import { useState } from 'react';
import axios from 'axios';
import useForm from '@/app/hooks/useForm';

const initialState = {
  modal: false,
  command: '',
}

export type MessageAI = {
  text: string;
  isBot: boolean;
}


const ChatWrapper: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [messages, setMessages] = useState<MessageAI[]>([])

  const {
    form,
    handleInput,
    setForm,
    setLoading,
    loading
  } = useForm(initialState);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const json = {
      command: form.command
    };
    setForm({
      ...form,
      command: ''
    })
    if (form.command) {
      axios.post('/api/openai', json)
        .then(res => {
          setMessages([
            ...messages,
            { text: form.command, isBot: false },
            res.data
          ])
        })
        .catch(error => {
          console.error('Kesalahan:', error);
        })
        .finally(() =>{ 
          setLoading(false)
        });
    }
  };


  return (
    <>
      <Button onClick={() => setModal(!modal)} className='fixed btn-ghost z-[49] bottom-8 end-4 md:bottom-10 md:end-10'>
        <Image src={chatIcon} width={50} alt='Chat Icon' />
      </Button>
      {modal &&
        <div className='relative'>
          <ChatAI
            command={form.command}
            data={messages}
            loading={loading}
            handleInput={handleInput}
            handleSubmit={onSubmit}
            setModal={setModal}
          />
        </div>
      }
    </>
  );
};

export default ChatWrapper;