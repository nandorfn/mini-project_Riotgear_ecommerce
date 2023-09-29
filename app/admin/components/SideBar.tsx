
const SideBar: React.FC = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay">
          </label>
          <ul className="menu p-4 w-80 min-h-full bg-[#EBEBED] text-base-content">
            <li><a>Landing Page</a></li>
            <li><a>Order List</a></li>
            <li><a>Blog</a></li>
            <li><a>Products</a></li>
            <li><a>Settings</a></li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default SideBar;