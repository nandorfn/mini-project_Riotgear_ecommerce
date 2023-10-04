import { headTableProduct } from "@/app/helpers/faqData";
import HeroSection from "./components/HeroSection";
import Table from "@/app/components/Table/Table";


const Page: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <HeroSection />
        <Table
          label={"List Display Products"}
          headTable={headTableProduct}
        />
      </div>

    </>
  );
};

export default Page;