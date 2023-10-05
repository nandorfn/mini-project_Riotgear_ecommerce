import fbIcon from '../../assets/icon/Facebook.svg'
import igIcon from '../../assets/icon/Instagram.png'
import xIcon from '../../assets/icon/TwitterX.png'
import ttIcon from '../../assets/icon/TikTok.png'
import RiotLogo from '../../assets/RiotLogoBlack.svg'
import Image from 'next/image';
import Link from 'next/link'

const Footer: React.FC = () => {
  const menus = [
    { label: 'Terms of Service', link: '/tos' },
    { label: 'Privacy Policy', link: '/privacy-policy' },
    { label: 'Cookie Policy', link: '/cookie-policy' },
    { label: 'Partners', link: '/partners' },
  ]

  return (
    <>
      <footer className='px-4 max-w-6xl mx-auto'>
        <figure className='flex justify-between pt-4 border-t-2 mt-20 mb-3'>
          <Image
            src={RiotLogo}
            alt='RiotGear icon'
          />
          <div className='flex gap-3'>
            <Image src={fbIcon} alt='Facebook icon' />
            <Image src={xIcon} alt='Instagram icon' />
            <Image src={igIcon} alt='Instagram icon' />
            <Image src={ttIcon} alt='Instagram icon' />
          </div>
        </figure>
        <div className='flex flex-col md:flex-row items-center text-center md:justify-between text-base text-[#9FA0A2] mb-8'>
          <span>
            &copy;2023 RIOTGEAR. All Right reserved
          </span>
          <ul className='flex flex-col md:flex-row md:gap-3'>
            {menus?.map((menu, index) =>
              <li key={index}>
                <Link className=' hover:text-base-300' href={menu.link}>{menu.label}</Link>
              </li>
            )}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;