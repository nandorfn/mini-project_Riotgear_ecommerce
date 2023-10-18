import Link from "next/link";


const ListMenu: React.FC = () => {
  const menus = [
    { label: 'Dashboard', Link: '/admin/' },
    { label: 'Landing Page', Link: '/admin/landing-page' },
    { label: 'Order List', Link: '/admin/order-list' },
    { label: 'Products', Link: '/admin/products' },
    { label: 'Blog', Link: '/admin/blog' },
    { label: 'Settings', Link: '/admin/settings' },
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