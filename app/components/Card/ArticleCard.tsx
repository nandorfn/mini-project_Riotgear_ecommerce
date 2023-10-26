'use client'
import Markdown from 'marked-react';
import Image from 'next/image';

type Props = {
  data: any,
}

const ArticleCard: React.FC<Props> = ({data}) => {
  return (
    <>
      <article className='flex border-b-2 pb-3 hover:bg-base-200 p-2 rounded-lg'>
        <figure className='w-[30%] md:w-[15%] relative'>
          <Image
            className='rounded-md object-cover'
            src={data.thumbnail}
            fill={true}
            alt='Thumbnail'
          />
        </figure>
        <div className='w-[70%] md:w-[85%] ps-5 truncate'>
          <h3 className={`hidden md:block md:text-3xl line-clamp-1 whitespace-pre-line`}>{data.title}</h3>
          <div className='line-clamp-3 whitespace-pre-line text-base-300'>
            <Markdown>{data.content}</Markdown>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleCard;