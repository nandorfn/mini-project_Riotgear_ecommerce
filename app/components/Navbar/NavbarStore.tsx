'use client'
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts'
import BrandLogo from '../../assets/RiotLogo.svg'
import BrandLogoBlack from '../../assets/RiotLogoBlack.svg'
import MenuBtn from '../../assets/MenuIcon.svg'
import Menus from './Menus';
import Link from 'next/link';
import Avatar from '../Avatar';
import IconWrapper from '../IconWrapper';


const NavbarStore: React.FC = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <header>
        <nav className='md:bg-base-200 flex flex-row justify-between px-2 rounded-xl mt-3 mx-3'>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-row items-center justify-between">
              {/* Page content here */}
              <div className='md:flex gap-4 flex-row'>
                <Link className='cursor-pointer flex items-center' href="/">
                  {isDesktop
                    ? <Image
                      src={BrandLogo}
                      alt='Brand Logo'
                    />
                    : <Image
                      className='mt-4'
                      src={BrandLogoBlack}
                      alt='Brand Logo'
                    />
                  }

                </Link>
                <ul className='hidden md:flex flex-row gap-4 pe-3 items-center'>
                  <Menus
                    menuFor={"store"}
                  />
                </ul>
              </div>
              <label htmlFor="my-drawer" className="drawer-button md:hidden">
                <Image
                  className='cursor-pointer'
                  src={MenuBtn}
                  alt='Menu Icon'
                />
              </label>
              <div className='hidden md:flex'>
                <Avatar />
              </div>
            </div>
            <div className="drawer-side z-50">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className='menu w-80 pt-4 min-h-full bg-[#EBEBED] text-lg relative'>
                { !isDesktop && <IconWrapper />}
                <Menus
                  menuFor='store'
                  />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarStore;