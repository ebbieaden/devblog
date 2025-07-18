import { useRouter } from "next/router";
import { posts } from "../data/posts";
import Head from "next/head";
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from "next";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Image from "next/image";


interface Props {
    title: string;
    content: string;
    image: string;
}

export default function Post({ title, content, image }: Props) {
    return (
        <>
            <h1>{title}</h1>
            <Image src='/images.jpg' alt='car' width={800} height={400} style={{ width: '100%', height: 'auto', borderRadius: '12px'}} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = posts.map(post => ({ params: { id: post.id } }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = posts.find(post => post.id === params?.id);
    
    if (!post) {
        return { notFound: true};
    }

    const markdownPath = path.join(process.cwd(), 'data', 'content', post.file);
    const fileContents = fs.readFileSync(markdownPath, 'utf8');
    const { content } = matter(fileContents);
    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();

    return {
        props: {
            title: post.title,
            content: htmlContent,
            image: post.image,
        },
    };
    
};

{/* // export default function PostPage() { */}
//     const router = useRouter();
//     const { id } = router.query;
//     const post = posts.find((p) => p.id === id);

//     if (!post) return <p>Post not found</p>;

//     return (
//         <>
//             <Head>
//                 <title>{post.title} | Devblog</title>
//                 <meta name='description' content={post.summary} />
//             </Head>
//             <h1>{post.title}</h1>
//             <p>This is a detailed page for the blog post: {post.title}</p>
//         </>
//     );
// }