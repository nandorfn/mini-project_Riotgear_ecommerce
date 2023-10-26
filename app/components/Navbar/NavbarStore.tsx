import Image from 'next/image';
import Link from 'next/link';
import BrandLogo from '@/app/assets/icon/RiotLogo.svg'
import MenuBtn from '@/app/assets/icon/MenuIcon.svg'
import cart from '@/app/assets/icon/cart.svg'
import Avatar from '@/app/components/Avatar';
import archive from '@/app/assets/icon/archive.svg'
import Drawer from '@/app/components/Drawer/Drawer';
import { Button } from '@/app/components/Button/Button';
import { checkUserLogin } from '@/app/utils/auth';
import Menus from './Menus';


const NavbarStore = async () => {
  const userAccess = await checkUserLogin();

  return (
    <>
      <header className='z-40 bg-white'>
        <nav className='md:bg-base-200 flex flex-row justify-between px-2 py-2 rounded-xl mt-3 mx-3'>
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
                {userAccess &&
                  <>
                    <Link className='pe-2' href={'/store/order'}>
                      <figure className='w-7 h-7 relative'>
                        <Image
                          className='hover:w-6'
                          src={archive}
                          fill={true}
                          alt='cart icon'
                        />
                      </figure>
                    </Link>
                    <Link className='pe-2' href={'/store/cart'}>
                      <figure className='w-5 h-5 relative'>
                        <Image
                          className='hover:w-6'
                          src={cart}
                          fill={true}
                          alt='cart icon'
                        />
                      </figure>
                    </Link>
                    <div className='border-s-2 h-8 border-[#D9D9D9]'></div>
                  </>
                }

                {!userAccess
                  ? <Link className="flex w-full mx-4" href={'/login'}>
                    <Button
                      variant={'white'}
                      className="text-black border border-base-300 font-normal"
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