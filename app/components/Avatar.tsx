import Image from "next/image";
import AvatarIcon from '../assets/Ellipse 1.png'
import ArrowDown from '../assets/arrow-down.svg'

const Avatar: React.FC = () => {
  return (
    <>
      <div className="collapse bg-[#EBEBED] w-fit">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <div className="avatar items-center gap-2">
            <div className="w-8 rounded-full">
              <Image 
                src={AvatarIcon} 
                alt="User Icon"
                />
            </div>
              <p className=" font-normal text-base">John Doe</p>
          </div>
        </div>
        <div className="collapse-content">
          <button className="btn btn-sm btn-error">Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Avatar;