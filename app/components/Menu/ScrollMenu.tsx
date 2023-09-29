import Link from "next/link";

const ScrollMenu: React.FC = () => {
  const category = [
    {label: 'T-Shirt', link: 't-shirt'},
    {label: 'Shirt', link: 'shirt'},
    {label: 'UT-Shirt', link: 'ut-shirt'},
    {label: 'Jeans', link: 'jeans'},
    {label: 'Polo Shirt', link: 'polo-shirt'},
    {label: 'Casual T-shirt', link: 'casual-t-shirt'},
    {label: 'Hoodie', link: 'hoodie'},
    {label: 'Sweater', link: 'sweater'},
    {label: 'Oversize T-Shirt', link: 'oversize-t-shirt'},
    {label: 'Jacket', link: 'Jacket'},
    {label: 'Chino', link: 'Chino'},
    {label: 'Ankle Pants', link: 'Ankle Pants'},
    {label: 'Shoes', link: 'Shoes'},
  ]

    return (
        <>
          <ul className="flex gap-3 text-sm breadcrumbs relative ">
            {category?.map((item, index) => 
              <li className="inline-block" key={index}>
                <Link className="bg-base-200 py-2 px-4 hover:bg-neutral-content rounded-full" href={`/find/${item.link}`}>{item.label}</Link>
              </li>
            )}
          </ul>
          
        </>
    );
};

export default ScrollMenu;