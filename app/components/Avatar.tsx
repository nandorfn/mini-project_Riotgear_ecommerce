import Image from "next/image";
import AvatarIcon from '../assets/Ellipse 1.png'

const Avatar: React.FC = () => {
  return (
    <>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <details className="p-0">
              <summary className="py-2 px-4">
                <div className="avatar items-center gap-2">
                  <div className="w-8 rounded-full">
                    <Image
                      src={AvatarIcon}
                      alt="User Icon"
                    />
                  </div>
                  <p className=" font-normal text-base">John Doe</p>
                </div>
              </summary>
              <ul className="p-2 bg-base-100 w-full">
                <li><button className="btn btn-sm btn-error">Log Out</button></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* <div className="collapse bg-[#EBEBED] w-fit">
        <input type="checkbox" />
        <div className="collapse-title p-0">
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
      </div> */}
    </>
  );
};

export default Avatar;