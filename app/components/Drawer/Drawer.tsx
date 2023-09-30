import Link from 'next/link';
import Menus from '../Navbar/Menus';

const Drawer: React.FC = () => {

  return (
    <>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className='menu w-80 pt-4 min-h-full bg-[#EBEBED] text-lg relative'>
          <Menus
            menuFor='store'
          />
          <li>
          <Link className="hover:font-medium" href={'/'}>{'Cart'}</Link>
          <Link className="hover:font-medium" href={'/'}>{'Wishlist'}</Link>
          <Link className="hover:font-medium" href={'/'}>{'Account'}</Link>
        </li>
        </ul>
      </div>
    </>
  );
};

export default Drawer;