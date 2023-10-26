import Link from 'next/link';
import Menus from '../Navbar/Menus';
import Avatar from '../Avatar';
import { checkUserLogin } from '@/app/utils/auth';
import { Button } from '../Button/Button';

const Drawer = async () => {
  const user = await checkUserLogin();

  return (
    <>
      <div className="drawer-side md:hidden h-full z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className='menu w-80 pt-4 min-h-full bg-[#EBEBED] text-lg relative'>
          {!user
            ? <li>
              <Link className='flex w-full' href={'/login'}>
                <Button variant={'white'} size={'full'}>Login</Button>
              </Link>
            </li>
            : <li className='flex w-full items-center justify-center my-4 md:hidden bg-primary rounded-lg'>
              <div className='px-8 py-2'>
                <Avatar
                  icon={''}
                  username={user?.username ?? ''}
                />
              </div>
            </li>
          }

          <li>
            <Link className="hover:font-medium" href={'/'}>{'Home'}</Link>
          </li>
          <Menus
            menuFor='store'
          />
          {user &&
            <>
              <li>
                <Link className="hover:font-medium" href={'/store/cart'}>{'Cart'}</Link>
              </li>
              <li>
                <Link className="hover:font-medium" href={'/store/order?status='}>{'Order'}</Link>
              </li>
            </>
          }
        </ul>
      </div>
    </>
  );
};

export default Drawer;