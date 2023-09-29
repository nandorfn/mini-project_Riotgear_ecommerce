import Image from 'next/image';
import BrandLogo from '../../assets/RiotLogoBlack.svg'
import Link from 'next/link';

const Navbar: React.FC = () => {
  const menus = [
    { label: 'Store', link: '/store' },
    { label: 'About', link: '/about' },
    { label: 'Collections', link: '/Collection' },
    { label: 'Blog', link: '/Blog' },
    { label: 'FAQ', link: '/faq' },

  ]

  return (
    <>
      <header>
        <nav className='bg-accent flex flex-row justify-between px-3 rounded-xl p-4'>
          <Image
            src={BrandLogo}
            alt='Brand Logo'
          />
          <ul className='flex gap-3'>
            {menus?.map((menu, index) =>
              <li key={index}>
                <Link href={menu.link}>{menu.label}</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;