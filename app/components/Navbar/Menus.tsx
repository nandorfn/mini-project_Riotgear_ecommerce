import Link from "next/link";
interface Props {
  menuFor: string;
}

const Menus: React.FC<Props> = ({ menuFor }) => {
  const menus = [
    {id:1, label: 'Home', link: '/' },
    {id:2, label: 'About', link: '/about' },
    {id:3, label: 'Collections', link: '/collection' },
    {id:4, label: 'Blog', link: '/blog' },
    {id:5, label: 'FAQ', link: '/faq' },
  ]
  
  return (
    <>
      {menus?.map((menu) =>
        <li key={menu.id}>
          <Link className="hover:font-medium" href={menu.link}>{menu.label}</Link>
        </li>
      )}
    </>
  );
};

export default Menus;