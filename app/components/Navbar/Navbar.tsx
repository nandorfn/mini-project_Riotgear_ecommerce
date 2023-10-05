import Image from 'next/image';
import BrandLogo from '../../assets/RiotLogoBlack.svg'
import MenuBtn from '../../assets/MenuIcon.svg'
import Menus from './Menus';
import Link from 'next/link';
import { Flex } from '../Container/Flex';

const Navbar: React.FC = () => {

  return (
    <>
        <nav className='md:bg-accent flex flex-row justify-between px-3 rounded-xl p-4'>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            
            <Flex 
              variant={'row'} 
              align={'between'} 
              className="drawer-content">
              {/* Page content here */}
              <Link className='cursor-pointer flex items-center' href="/">
                <Image
                  src={BrandLogo}
                  alt='Brand Logo'
                />
              </Link>
              <ul className='hidden md:flex flex-row gap-4 pe-3'>
                <li>
                  <Link className="hover:font-medium" href={'/store'}>{'Store'}</Link>
                </li>
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
            </Flex>
            
            <div className="drawer-side z-50">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className='menu w-80 pt-16 min-h-full bg-[#EBEBED] text-lg'>
                <li>
                  <Link className="hover:font-medium" href={'/'}>{'Store'}</Link>
                </li>
                <Menus
                  menuFor='landing-page'
                />
              </ul>
            </div>
            
          </div>
        </nav>
    </>
  );
};

export default Navbar;