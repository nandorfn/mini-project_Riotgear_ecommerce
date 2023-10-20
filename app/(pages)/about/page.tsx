import { Heading } from "@/app/components/Container/Heading";
import { about } from "@/app/helpers/dataObject";
const page: React.FC = () => {
  return (
    <>
      <Heading fs={'xl4'} ff={'neue'} className='text-center mb-5'>
        About Us
      </Heading>
      <article className="flex flex-col gap-3 max-w-xl text-lg text-justify mx-4 sm:mt-8 sm:mx-auto prose">
        {about?.map((text, index) =>
          <p key={index}>{text.content}.</p>
        )}
      </article>
    </>
  );
};

export default page;