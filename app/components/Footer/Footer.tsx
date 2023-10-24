import fbIcon from '../../assets/icon/Facebook.svg'
import igIcon from '../../assets/icon/Instagram.png'
import xIcon from '../../assets/icon/TwitterX.png'
import ttIcon from '../../assets/icon/TikTok.png'
import RiotLogo from '../../assets/icon/RiotLogoBlack.svg'
import Image from 'next/image';
import Link from 'next/link'
import { Flex } from '../Container/Flex'
import { HTMLAttributes } from 'react'
import { cn } from '@/app/utils/utils'

interface FooterProps extends HTMLAttributes<HTMLElement>{}

const Footer: React.FC<FooterProps> = ({className, ...props}) => {
  const menus = [
    { label: 'Terms of Service', link: '/tos' },
    { label: 'Privacy Policy', link: '/privacy-policy' },
    { label: 'Cookie Policy', link: '/cookie-policy' },
    { label: 'Partners', link: '/partners' },
  ]

  return (
    <>
      <footer className={cn(className, 'px-4 mx-auto')} {...props}>
        <figure className='flex justify-between pt-4 border-t-2 mt-20 mb-3'>
          <Image
            src={RiotLogo}
            alt='RiotGear icon'
            width={100}
            height={100}
          />
          <div className='flex gap-3'>
            <Image src={fbIcon} alt='Facebook icon' />
            <Image src={xIcon} alt='Instagram icon' />
            <Image src={igIcon} alt='Instagram icon' />
            <Image src={ttIcon} alt='Instagram icon' />
          </div>
        </figure>
        <Flex 
          variant={'colToRow'} 
          align={'iCenter'} 
          clr={'grey'}
          className='text-center md:justify-between text-base mb-8'>
          <span>
            &copy;2023 RIOTGEAR. All Right reserved
          </span>
          <ul className='flex flex-row flex-wrap justify-center gap-x-3'>
            {menus?.map((menu, index) =>
              <li key={index}>
                <Link className=' hover:text-base-300' href={menu.link}>{menu.label}</Link>
              </li>
            )}
          </ul>
        </Flex>
      </footer>
    </>
  );
};

export default Footer;