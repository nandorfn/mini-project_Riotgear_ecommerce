import Image from 'next/image';
import BrandLogo from '../../assets/RiotLogoBlack.svg'
import MenuBtn from '../../assets/MenuIcon.svg'
import Menus from './Menus';
import Link from 'next/link';

const Navbar: React.FC = () => {

  return (
    <>
      <header>
        <nav className='md:bg-accent flex flex-row justify-between px-3 rounded-xl p-4'>

          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-row justify-between">
              {/* Page content here */}
              <Link className='cursor-pointer flex items-center' href="/">
                <Image
                  src={BrandLogo}
                  alt='Brand Logo'
                />
              </Link>
              <ul className='hidden md:flex flex-row gap-4 pe-3'>
                <Menus
                  menuFor='landing-page'
                />
              </ul>
              <label htmlFor="my-drawer" className="drawer-button md:hidden">
                <Image
                  className='cursor-pointer'
                  src={MenuBtn}
                  alt='Menu Icon'
                />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className='menu w-80 pt-16 min-h-full bg-[#EBEBED] text-lg'>
                <Menus
                  menuFor='landing-page'
                />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;