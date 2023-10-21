import Link from "next/link";


const ListMenu: React.FC = () => {
  const menus = [
    { label: 'Dashboard', Link: '/admin/' },
    { label: 'Order List', Link: '/admin/order-list' },
    { label: 'Products', Link: '/admin/products' },
    { label: 'Blog', Link: '/admin/blog' },
    { label: 'Setting', Link: '/admin/setting' },
  ]

  return (
    <>
      <ul className="text-neutral text-xl">
        {menus?.map((menu, index) =>
          <li key={index} 
            className="hover:bg-[#C2F377] rounded-lg">
            <Link 
              className="hover:text-neutral"
              href={menu.Link}>
              {menu.label}
            </Link>
          </li>
        )}

      </ul>
    </>
  );
};

export default ListMenu;