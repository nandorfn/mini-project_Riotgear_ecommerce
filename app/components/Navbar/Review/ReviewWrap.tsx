import ReviewCard from "../Card/ReviewCard";

const ReviewWrap: React.FC = () => {
  return (
    <>
      <section className="p-4 flex flex-col gap-3 whitespace-nowrap">
        <h2 className="md:text-xl font-medium">Reviews</h2>
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
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
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
    </>
  );
};

export default ReviewWrap;