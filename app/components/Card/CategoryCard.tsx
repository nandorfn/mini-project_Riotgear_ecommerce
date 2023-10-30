import Image, { StaticImageData } from 'next/image';

interface PropsParent {
  imgSrc: StaticImageData;
  label: string;
}

const CategoryCard: React.FC<PropsParent> = ({imgSrc, label}) => {
  return (
    <>
      <div className="card w-30 sm:w-full h-fit sm:h-52 xl:h-72 bg-base-100 shadow-xl image-full hover:opacity-80 cursor-pointer">
        <figure>
          <Image
          className='rounded-xl'
          src={imgSrc}
          fill={true}
          alt='Category Card'
          />
        </figure>
        <div className="card-body w-20 mx-auto flex justify-center items-center">
          <h2 className={`card-title sm:text-4xl truncate lg:text-6xl hover:text-base-100`}>{label}</h2>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;