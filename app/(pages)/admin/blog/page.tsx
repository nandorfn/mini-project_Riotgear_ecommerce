import Link from "next/link";

const Page: React.FC = () => {
    return (
        <>
          <h2 className="text-2xl font-medium">List Articles</h2>
          <Link href={'/admin/blog/create-article'}>Add Article</Link>
        </>
    );
};

export default Page;