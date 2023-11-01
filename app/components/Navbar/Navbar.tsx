import Image from 'next/image';
import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/app/utils/utils';
import BrandLogo from '@/app/assets/icon/RiotLogoBlack.svg'
import MenuBtn from '@/app/assets/icon/MenuIcon.svg'
import { Flex } from '@/app/components/Container/Flex';
import Menus from './Menus';

interface NavbarProps extends HTMLAttributes<HTMLElement> { }

const Navbar: React.FC<NavbarProps> = ({ className, ...props }) => {

  return (
    <nav className={cn('md:bg-accent flex flex-row justify-between px-3 rounded-xl p-4 h-fit', className)} {...props}>
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
              width={80}
              height={17}
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
              <Link className="hover:font-medium" href={'/store'}>{'Store'}</Link>
            </li>
            <Menus
              menuFor='landing-page'
            />
          </ul>
        </div>  
      </div>
    </nav>
  );
};

export default Navbar;