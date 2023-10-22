import Avatar from "@/app/components/Avatar";
import SideBar from "./components/SideBar";
import { Flex } from "@/app/components/Container/Flex";

const LayoutAdmin = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <SideBar>
        <div className=" justify-between hidden lg:flex">
          <h1 className="text-4xl">Dashboard Overview</h1>
          <Avatar 
            username="User"
            icon=""
          />
        </div>
        <Flex variant={'col'} className="gap-5 mb-8">
          {children}
        </Flex>
      </SideBar>
    </>
  );
};

export default LayoutAdmin;