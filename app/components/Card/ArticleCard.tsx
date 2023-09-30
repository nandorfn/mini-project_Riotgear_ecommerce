import { bebas_neue } from '@/app/utils/fonts';
import blogThumbnail from '../../assets/Content/Skate.png'
import Image from 'next/image';



const ArticleCard: React.FC = () => {
  return (
    <>
      <article className='flex border-b-2 pb-3'>
        <figure className='w-[30%]'>
          <Image
            src={blogThumbnail}
            alt='Thumbnail'
          />
        </figure>
        <div className='w-[70%] p-3'>
          <h3 className={`text-3xl ${bebas_neue.className}`}>The Evolution of Streetwear: From Subculture to Mainstream</h3>
          <p>Learn how streetwear has evolved from a subculture movement into a global fashion trend influencing today&apos;s clothing industry. We&apos;ll delve into the journey of streetwear and its impact on everyday fashion.
          </p>
        </div>
      </article>
    </>
  );
};

export default ArticleCard;