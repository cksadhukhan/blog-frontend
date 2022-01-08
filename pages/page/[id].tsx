import moment from "moment";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Blog, Layout, Pagination } from "../../components";
import { getAllPostsForNextPage, getPostCount } from "../../lib/api";
import { imageBuilder } from "../../lib/sanity";
import { Author } from "../../models";

const Page: NextPage = ({ posts, pages, page }: any) => {
  return (
    <div>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Blog app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="px-4 lg:px-28 py-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {posts &&
            posts.map((post) => (
              <Blog
                key={post.slug}
                title={post.title}
                slug={post.slug}
                image={imageBuilder(post.coverImage).url() ?? ""}
                description={post.description.substring(0, 150)}
                date={moment(post.date).format("LL")}
                tag={post.tag[0] ?? "Development"}
                author={
                  new Author({
                    name: post.author.name,
                    position: post.author.position,
                    bio: "",
                    avatar: post.author.picture,
                  })
                }
              />
            ))}
        </div>
        <Pagination totalPage={pages} currentPage={page} />
      </Layout>
    </div>
  );
};

export async function getStaticPaths() {
  const count = await getPostCount();
  const pages = Math.ceil(count / 6);
  const nextPages = Array.from(Array(pages), (_, index) => index + 1);

  return {
    paths:
      nextPages?.map((page: any) => ({
        params: {
          id: page.toString(),
        },
      })) || [],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const count = await getPostCount();
  const pages = Math.ceil(count / 6);
  const nextPosts = await getAllPostsForNextPage(id, false);

  return {
    props: {
      posts: nextPosts,
      page: id,
      pages,
    },
  };
}

export default Page;
