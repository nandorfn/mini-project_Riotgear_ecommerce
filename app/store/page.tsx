import CardContainer from "../components/Card/CardContainer";
import MenuFilter from "../components/Menu/MenuFillter";
import ScrollMenuContainer from "../components/Menu/ScrollMenuContainer";
import NavbarStore from "../components/Navbar/NavbarStore";

const page: React.FC = () => {
  return (
    <>
      <section className="max-w-6xl p-4 mx-auto">
        <NavbarStore />
        <div className="flex flex-row w-full p-4 gap-1">
          <div className="w-[20%]">
            <MenuFilter />
          </div>
          <div className="w-[80%]">
            <ScrollMenuContainer />
            <CardContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;