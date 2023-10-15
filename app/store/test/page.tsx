import { Flex } from "@/app/components/Container/Flex";

const page: React.FC = () => {
  return (
    <>
      <Flex variant={'row'} className="h-screen justify-between mx-auto gap-10 px-4 mt-5">
        <div className="bg-base-200 h-screen w-1/2 rounded-lg flex justify-center"><span className="loading loading-dots loading-lg"></span></div>
        <div className="bg-base-200 h-screen w-1/2 rounded-lg flex justify-center"><span className="loading loading-dots loading-lg"></span></div>
      </Flex>
    </>
  );
};

export default page;