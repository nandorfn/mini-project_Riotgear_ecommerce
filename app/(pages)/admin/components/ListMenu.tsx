import Avatar from "@/app/components/Avatar";
import { checkUserLogin } from "@/app/utils/auth";
import Link from "next/link";


const ListMenu = async () => {
  const user = await checkUserLogin();

  const menus = [
    { label: 'Dashboard', Link: '/admin/' },
    { label: 'Order List', Link: '/admin/order-list?status=' },
    { label: 'Products', Link: '/admin/products' },
    { label: 'Blog', Link: '/admin/blog' },
  ]

  return (
    <ul className={`text-neutral text-xl`}>
      <li className="flex w-[78%] -mt-1 ms-4 items-center justify-center my-4 lg:hidden bg-primary rounded-lg">
        <div className='px-8 py-2'>
          <Avatar
            username={user?.username ?? ''}
            icon={''}
          />
        </div>
      </li>
      {menus?.map((menu, index) =>
        <li key={index}
          className={`hover:bg-[#C2F377] rounded-lg`}>
          <Link
            className={`hover:text-neutral text-white font-medium `}
            href={menu.Link}>
            {menu.label}
          </Link>
        </li>
      )}

    </ul>
  );
};

export default ListMenu;