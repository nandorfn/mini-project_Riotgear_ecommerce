import Link from "next/link";

const Menus: React.FC = () => {
  const menus = [
    { label: 'Store', link: '/store' },
    { label: 'About', link: '/about' },
    { label: 'Collections', link: '/Collection' },
    { label: 'Blog', link: '/Blog' },
    { label: 'FAQ', link: '/faq' },
  ]

  return (
    <>
        {menus?.map((menu, index) =>
          <li key={index}>
            <Link className="hover:font-medium" href={menu.link}>{menu.label}</Link>
          </li>
        )}
    </>
  );
};

export default Menus;