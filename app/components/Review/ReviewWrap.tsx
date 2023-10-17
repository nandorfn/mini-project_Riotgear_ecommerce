import ReviewCard from "../Card/ReviewCard";
import { Heading } from "../Container/Heading";

const ReviewWrap: React.FC = () => {
  return (
    <>
      <section className="md:mt-3 flex flex-col gap-3 whitespace-nowrap">
        <Heading variant={'five'}>Reviews</Heading>
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
        <div className="flex breadcrumbs gap-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
    </>
  );
};

export default ReviewWrap;