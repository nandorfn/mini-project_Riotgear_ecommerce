import Image from 'next/image';
import { cn } from '@/app/utils/utils';
import { HTMLAttributes } from 'react';
import avatar from '@/app/assets/icon/user.png'
import { Review } from '@/app/components/Review/ReviewWrap';
import UserRating from '@/app/components/Container/UserRating';

interface ReviewCard extends HTMLAttributes<HTMLElement>{
  review: Review
}

const ReviewCard: React.FC<ReviewCard> = ({ 
  review,
  className,
  ...props
}) => {
  return (
    <>
      <article className={cn('flex flex-col w-fit bg-base-200 rounded-xl gap-3 p-3', className)} {...props}>
        <figure className='flex items-center gap-3'>
          <div className="avatar">
            <div className="w-11 rounded-full">
              <Image 
              src={avatar} 
              fill={true}
              alt='User Picture' />
            </div>
          </div>
          <div>
            <h4 className='font-medium'>{review.username}</h4>
            <p className='text-base-300 text-sm'>{review.createdAt.toLocaleDateString('ID-id')}</p>
          </div>
        </figure>
        <UserRating userRating={review.rating} />
        <p className='whitespace-normal text-base-300 w-[18rem] line-clamp-2'>{review.text}</p>
      </article>
    </>
  );
};

export default ReviewCard;