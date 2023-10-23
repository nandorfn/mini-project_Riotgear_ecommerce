'use client'
import Markdown from 'marked-react';
import Image from 'next/image';

type Props = {
  data: any,
}

const ArticleCard: React.FC<Props> = ({data}) => {
  return (
    <>
      <article className='flex border-b-2 pb-3'>
        <figure className='w-[20%] relative'>
          <Image
            src={data.thumbnail}
            fill={true}
            alt='Thumbnail'
          />
        </figure>
        <div className='w-[80%] ps-5 truncate'>
          <h3 className={`text-3xl line-clamp-1`}>{data.title}</h3>
          <div className=' line-clamp-3'>
            <Markdown>{data.content}</Markdown>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleCard;