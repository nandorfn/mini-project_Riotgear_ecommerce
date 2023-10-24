import { getArticle } from "@/app/utils/queryDb";
import MdBody from "./MdBody";
import { redirect } from "next/navigation";
import Navbar from "@/app/components/Navbar/Navbar";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const article = await getArticle(searchParams);
  if (!article) {
    redirect('/blog')
  }

  return (
    <>
      <Navbar className="max-w-6xl md:mx-4 xl:mx-auto mt-4 mb-10" />
      <main className="flex justify-center">

        <MdBody
          thumbnail={article.thumbnail}
          content={article.content}
        />
      </main>
    </>
  );
};

export default page;