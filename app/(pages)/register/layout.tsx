import { Flex } from "@/app/components/Container/Flex";
import Footer from "@/app/components/Footer/Footer";
import NavbarStore from "@/app/components/Navbar/NavbarStore";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <NavbarStore />
        <Flex className="min-h-[70vh]" variant={'col'} align={'center'}>
        {children}
        </Flex>
        <Footer />
      </div>
    </>
  );
};

export default layout;