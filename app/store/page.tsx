import CardContainer from "../components/Card/CardContainer";
import MenuFilter from "../components/Menu/MenuFillter";
import ScrollMenuContainer from "../components/Menu/ScrollMenuContainer";
import NavbarStore from "../components/Navbar/NavbarStore";

const page: React.FC = () => {
  return (
    <>
      <section className="max-w-6xl p-4 mx-auto">
        <NavbarStore />
        <div className="flex flex-row w-full md:p-4 gap-1">
          <div className="w-[27.6%] hidden md:block">
            <MenuFilter />
          </div>
          <div className="w-full pe-3 mt-3 md:mt-0 md:w-[73.4%]">
            <ScrollMenuContainer />
            <CardContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;