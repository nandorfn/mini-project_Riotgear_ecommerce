import Image from "next/image";
import starColored from '@/app/assets/icon/starOrange.svg';
import starGray from '@/app/assets/icon/starGray.svg';

const UserRating = ({ userRating }: { userRating: number }) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index: number) => (
        <div key={index} className="star">
          {index < userRating ? <Image src={starColored} alt="Star" /> : <Image src={starGray} alt="Gray Star" />}
        </div>
      ))}
    </div>
  );
};

export default UserRating;
