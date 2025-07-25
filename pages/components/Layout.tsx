import Head from 'next/head';
import Navbar from './Navbar';
// import Navbar from './Navbar';
// import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function Layout({ children, title = 'Devblog'}: LayoutProps) {
    return (
        <>
        <Navbar />
        <Head>
            <title>{title}</title>
            <meta name="description" content='Devblog - A blog for developers' />
            <meta property='og:title' content={title} />
            <meta property='og.image' content= '/images/images.png' />
        </Head>
        {/* <Navbar /> */}
        <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>{children}</main>
        {/* <Footer /> */}
        </>
    );
}