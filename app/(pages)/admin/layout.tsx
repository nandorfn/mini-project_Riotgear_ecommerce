import Avatar from "@/app/components/Avatar";
import SideBar from "./components/SideBar";
import { Flex } from "@/app/components/Container/Flex";
import { checkUserLogin } from "@/app/utils/auth";

const LayoutAdmin = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const user = await checkUserLogin();

  return (
    <>
      <SideBar>
        <div className="justify-between hidden lg:flex">
          <h1 className="text-4xl">Dashboard Overview</h1>
          <Avatar 
            username={user?.username ?? ''}
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