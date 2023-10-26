import Link from 'next/link'
import NavbarStore from './components/Navbar/NavbarStore'
import Footer from './components/Footer/Footer'
import { Flex } from './components/Container/Flex'
import { Heading } from './components/Container/Heading'
import { Button } from './components/Button/Button'

export default function NotFound() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <NavbarStore />

        <Flex variant={'col'} className=' justify-center items-center h-[74vh] gap-5'>
          <p>PAGE NOT FOUND</p>
          <Heading fs={'xl5'}>404</Heading>
          <Link href={'/store'}>
            <Button variant={'black'}>CONTINUE SHOPPING</Button>
          </Link>
        </Flex>


        <Footer />
      </div>
    </>
  )
}