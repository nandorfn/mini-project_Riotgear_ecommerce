import Image from 'next/image';
import BrandLogo from '../../assets/RiotLogo.svg'
import MenuBtn from '../../assets/MenuIcon.svg'
import Menus from './Menus';
import Link from 'next/link';
import Avatar from '../Avatar';
import Drawer from '../Drawer/Drawer';
import { checkUserLogin } from '@/app/utils/auth';
import cart from '../../assets/icon/cart.svg'
import { Button } from '../Button/Button';


const NavbarStore = async () => {
  const userAccess = await checkUserLogin();

  return (
    <>
      <header className='z-40 bg-white'>
        <nav className='md:bg-base-200 flex flex-row justify-between px-2 rounded-xl mt-3 mx-3'>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-row items-center justify-between">
              {/* Page content here */}
              <div className='md:flex gap-4 flex-row'>
                <Link className='cursor-pointer flex items-center' href="/">
                  <Image
                    src={BrandLogo}
                    alt='Brand Logo'
                  />
                </Link>
                <ul className='hidden md:flex flex-row gap-4 pe-3 items-center'>
                  <li>
                    <Link className="hover:font-medium" href={'/'}>{'Home'}</Link>
                  </li>
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
              <div className='hidden md:flex md:gap-2 md:items-center'>
                <Link className='pe-2' href={'/store/cart'}>
                  <Image
                    className='hover:w-6'
                    src={cart}
                    width={20}
                    height={20}
                    alt='cart icon'
                  />
                </Link>

                <div className='border-s-2 h-8 border-[#D9D9D9]'>
                </div>
                {!userAccess
                  ? <Link className="flex w-full mx-4" href={'/login'}>
                    <Button
                      variant={'info'}
                      className="text-white"
                      size={'sm'}>Login
                    </Button>
                  </Link>
                  : <Avatar username={userAccess?.username ?? ''} icon={""} />
                }
              </div>
            </div>
            <Drawer />
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarStore;