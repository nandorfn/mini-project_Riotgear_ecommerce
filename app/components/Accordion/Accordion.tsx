'use client'
import Image from 'next/image';
import arrowDown from '@/app/assets/icon/arrow-down.svg'
import { Heading } from '@/app/components/Container/Heading';
import Markdown from 'marked-react';

type AccordionProps = {
  label: string;
  content: string;
}

const Accordion = ({ label, content }: AccordionProps) => {
  return (
    <>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title px-0 text-base md:text-xl font-medium flex justify-between">
          <Heading variant={'five'}>
            {label}
          </Heading>
          <Image
            width={20}
            height={20}
            src={arrowDown}
            alt="arrow down"
          />
        </div>
        <div className="collapse-content px-0">
          <div className='truncate whitespace-normal text-base-300'>
          {content &&
            <Markdown>
              {content}
            </Markdown>
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;