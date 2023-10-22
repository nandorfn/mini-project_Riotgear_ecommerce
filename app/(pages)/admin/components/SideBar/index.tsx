import Image from "next/image";
import LogoAdmin from '@/app/assets/icon/AdminLogo.svg';
import RiotLogo from '@/app/assets/icon/RiotLogo.svg';
import MenuIcon from '@/app/assets/icon/MenuIcon.svg';
import ListMenu from "./ListMenu";


const SideBar = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <nav className="flex justify-between p-4 lg:p-0 items-center">
            <Image
              className="lg:hidden"
              src={RiotLogo}
              alt="Riot Logo"
            />
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
              <Image
                className=" cursor-pointer"
                src={MenuIcon}
                alt="Menu Icon"
              />
            </label>
          </nav>
          <main className="lg:mx-8 lg:mt-5">
          {children}
          </main>
        </div>
        <aside className="drawer-side   ">
          <label htmlFor="my-drawer-2" className="drawer-overlay">
          </label>
          <div className="menu w-80 p-4 min-h-full bg-[#EBEBED]">
            <Image
              className="ms-4 mb-8"
              src={LogoAdmin}
              alt="Logo Brand"
            />
            <ListMenu />
          </div>
        </aside>
      </div>

    </>
  );
};

export default SideBar;