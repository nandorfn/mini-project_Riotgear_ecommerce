import { about } from "@/app/helpers/dataObject";
const page: React.FC = () => {
  return (
    <>
      <article className="flex flex-col gap-3 max-w-xl text-lg text-justify mx-4 sm:mt-8 sm:mx-auto">
        {about?.map((text, index) =>
          <p key={index}>{text.content}.</p>
        )}
      </article>
    </>
  );
};

export default page;