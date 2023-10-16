import Avatar from "../components/Avatar";
import SideBar from "./components/SideBar";

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
        {children}
      </SideBar>
    </>
  );
};

export default LayoutAdmin;