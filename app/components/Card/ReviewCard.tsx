import Image from 'next/image';
import avatar from '../../assets/Ellipse 1.png'

const ReviewCard: React.FC = () => {
  return (
    <>
      <article className="flex flex-col bg-base-200 rounded-xl gap-3 p-3">
        <figure className='flex items-center gap-3'>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <Image src={avatar} alt='User Picture' />
            </div>
          </div>
          <div>
            <h4 className='font-medium'>Theresa Web</h4>
            <p>30/11/2023</p>
          </div>
        </figure>
        <div className="rating rating-sm">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
        <p className='whitespace-normal text-base-300 w-[18rem]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
      </article>
    </>
  );
};

export default ReviewCard;