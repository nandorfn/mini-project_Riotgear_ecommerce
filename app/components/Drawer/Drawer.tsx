import Link from 'next/link';
import Menus from '../Navbar/Menus';

const Drawer: React.FC = () => {

  return (
    <>
      <div className="drawer-side h-full z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className='menu w-80 pt-4 min-h-full bg-[#EBEBED] text-lg relative'>
        <li>
          <Link className="hover:font-medium" href={'/'}>{'Home'}</Link>
        </li>
          <Menus
            menuFor='store'
          />
          <li>
          <Link className="hover:font-medium" href={'/store/cart'}>{'Cart'}</Link>
        </li>
        <li>
          <Link className="hover:font-medium" href={'/store/order?status='}>{'Order'}</Link>
        </li>
        </ul>
      </div>
    </>
  );
};

export default Drawer;