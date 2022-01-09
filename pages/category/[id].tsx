import { NextPage } from "next";
import Head from "next/head";
import { Layout, Pagination } from "../../components";

const CategoryPost: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Blog app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="px-28">
          <h2 className="px-2 text-3xl">React Js</h2>
          <div className="px-4 lg:px-28 py-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
          <Pagination totalPage={2} currentPage={2} />
        </div>
      </Layout>
    </div>
  );
};

export default CategoryPost;
