import Link from "next/link";
interface Props {
  menuFor: string;
}

const Menus: React.FC<Props> = ({ menuFor }) => {
  const menus = [
    { label: 'Store', link: '/store' },
    { label: 'About', link: '/about' },
    { label: 'Collections', link: '/Collection' },
    { label: 'Blog', link: '/Blog' },
    { label: 'FAQ', link: '/faq' },
  ]
  
  if (menuFor === "store") {
    menus[0] = { label: 'Home', link: '/' };
  }
  
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