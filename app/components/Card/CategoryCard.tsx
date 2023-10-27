import Image, { StaticImageData } from 'next/image';

interface PropsParent {
  imgSrc: StaticImageData;
  label: string;
}

const CategoryCard: React.FC<PropsParent> = ({imgSrc, label}) => {
  return (
    <>
      <div className="card w-fit xl:mt-2 bg-base-100 shadow-xl image-full hover:opacity-80 cursor-pointer">
        <figure>
          <Image
          src={imgSrc}
          alt='Category Card'
          />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className={`card-title text-6xl hover:text-base-100`}>{label}</h2>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;