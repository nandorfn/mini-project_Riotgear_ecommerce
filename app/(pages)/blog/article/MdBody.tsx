'use client'
import Markdown from "marked-react";
import * as DOMPurify from 'dompurify';
import Image from "next/image";

type Article = {
  thumbnail: string
  content: string
}

const MdBody = ({content, thumbnail}: Article) => {
  const clean = DOMPurify.sanitize(content)
    return (
        <>
          <article className="prose lg:prose-xl max-w-4xl prose-stone md:shadow-lg px-4 md:py-8 md:px-28 rounded-xl">
          <Image
          className="mx-auto"
          src={thumbnail}
          width={750}
          height={750}
          alt="Thumbnail"
        />
            <Markdown>{clean}</Markdown>
          </article>
        </>
    );
};

export default MdBody;