'use client'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import rehypeSanitize from "rehype-sanitize";

import { Flex } from "@/app/components/Container/Flex";
import Input from "@/app/components/Form/Input";
import useForm from "@/app/hooks/useForm";
import { Button } from "@/app/components/Button/Button";
import axios from "axios";
import { useRouter } from "next/navigation";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

const Page: React.FC = () => {
    const [content, setContent] = useState<string | undefined>('');
    const { form, handleInput } = useForm('');
    const data = {
        content,
        title: form.title,
        thumbnail: form.thumbnail
    };
    
    const router = useRouter();
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        axios.post(`/api/blog`, data)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    return (
        <>
            <Flex variant={'col'} className="gap-5 h-screen">
                <h2 className="text-2xl font-medium">Blog Editor</h2>
                <form className="gap-5 flex flex-col w-full">
                    <Flex className=" items-end gap-5">
                        <label className="font-medium w-1/2">
                            Title
                            <Input
                                name={'title'}
                                value={form.title}
                                type={'text'}
                                handleInput={handleInput}
                                placeholder="Input title here..."
                            />
                        </label>
                        <label className="font-medium w-1/2">
                            Link Thumbnail
                            <Input
                                name={'thumbnail'}
                                value={form.thumbnail}
                                type={'text'}
                                handleInput={handleInput}
                                placeholder="Input img link here..."
                            />
                        </label>
                        <Button
                            onClick={onSubmit}
                            type="submit"
                            variant={'primary'}>SUBMIT ARTICLE
                        </Button>
                    </Flex>

                    <label className="font-medium">
                        Content
                        <MDEditor
                            value={content}
                            onChange={setContent}
                            height={800}
                            maxHeight={1200}
                            textareaProps={{ rows: 100 }}
                            previewOptions={{
                                rehypePlugins: [[rehypeSanitize]],
                            }}

                        />
                    </label>
                </form>
            </Flex>
        </>
    );
};

export default Page;