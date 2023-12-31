import { HTMLAttributes } from 'react'
import Image from 'next/image'

import fbIcon from '@/app/assets/icon/Facebook.svg'
import igIcon from '@/app/assets/icon/Instagram.png'
import xIcon from '@/app/assets/icon/TwitterX.png'
import ttIcon from '@/app/assets/icon/TikTok.png'
import RiotLogo from '@/app/assets/icon/RiotLogoBlack.svg'
import { Flex } from '@/app/components/Container/Flex'
import { cn } from '@/app/utils/utils'

interface FooterProps extends HTMLAttributes<HTMLElement>{}

const Footer: React.FC<FooterProps> = ({className, ...props}) => {

  type Menu = {
    label: string,
  }
  const menus = [
    { label: 'Terms of Service'},
    { label: 'Privacy Policy'},
    { label: 'Cookie Policy'},
    { label: 'Partners' },
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
            {menus?.map((menu: Menu, index: number) =>
              <li key={index}>
                {menu.label}
              </li>
            )}
          </ul>
        </Flex>
      </footer>
    </>
  );
};

export default Footer;