'use client'
import Image from "next/image";
import avatar from "@/app/assets/icon/user.png";
import { userAvatar } from "@/app/utils/types";
import { getData } from "../utils/api";
import { useState } from "react";
import Transparent from "./Container/Transparent";
import { useRouter } from "next/navigation";

const Avatar = ({ username, icon }: userAvatar) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);
    await getData('/api/logout')
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          router.refresh()
        }
      }
      )
  }

  return (
    <>
      {loading
        ? <Transparent>
          <span className="loading loading-spinner loading-lg"></span>
        </Transparent>

        : <div className="flex-none z-50">
          <ul className="menu py-0 menu-horizontal">
            <li>
              <details className="p-0">
                <summary className="py-2 px-4">
                  <div className="avatar items-center gap-2">
                    <div className="w-8 rounded-full">
                      <Image
                        src={avatar}
                        alt="User Icon"
                      />
                    </div>
                    <p className=" font-normal text-base">{username}</p>
                  </div>
                </summary>
                <ul className="p-2 bg-base-100 w-full">
                  <li>
                    <button onClick={handleLogout} className="btn btn-sm btn-error">Log Out</button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

export default Avatar;