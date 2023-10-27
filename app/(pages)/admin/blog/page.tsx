'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/app/components/Button/Button";
import { headTableArticle } from "@/app/helpers/dataObject";

const Page = () => {
  const [articles, setArticles] = useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('/api/blogs')
          .then(res => {
            setArticles(res.data);
          })
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])


  return (
    <>
      <main className="px-4 mt-5 lg:px-0 flex flex-col gap-3">
        <h2 className="text-2xl font-medium">List Articles</h2>
        <Link href={'/admin/blog/create-article'}>
          <Button variant={'success'}>ADD ARTICLE</Button>
        </Link>

        <div className="overflow-x-auto p-1 mt-3">
          <table className="table table-zebra bg-base-100">
            <thead>
              <tr>
                {headTableArticle?.map((head, index) =>
                  <th key={index}>{head}</th>
                )}
              </tr>
            </thead>
            <tbody className="text-base font-normal">
              {articles?.map((item: any) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.viewsCount}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Page;