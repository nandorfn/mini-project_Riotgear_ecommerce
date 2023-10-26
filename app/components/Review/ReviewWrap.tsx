import ReviewCard from "@/app/components/Card/ReviewCard";
import { Heading } from "@/app/components/Container/Heading";
import UserRating from "@/app/components/Container/UserRating";

export type Review = {
  id: number,
  text: string,
  rating: number,
  productId: string
  orderId: string,
  userId: string,
  createdAt: Date,
  updatedAt: Date
}

type Props = {
  reviews: Review[]
}

const ReviewWrap = ({ reviews }: Props) => {
  const totalRatings = reviews.reduce((total, review) => total + review.rating, 0);
  const averageRating = reviews.length > 0 ? totalRatings / reviews.length : 0;

  return (
    <>
      {reviews.length > 0 &&
        <section className="md:mt-3 flex flex-col gap-3 whitespace-nowrap">
          <Heading variant={'five'}>Reviews</Heading>
          
          <UserRating userRating={averageRating} />
          <div className="flex breadcrumbs gap-3">
          {reviews?.map((item: Review) => (
            <ReviewCard
              key={item.id}
              review={item}
            />
          ))
          }
          </div>
        </section>
      }
    </>
  );
};

export default ReviewWrap;