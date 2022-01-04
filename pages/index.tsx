import moment from "moment";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Blog, Layout, Pagination } from "../components";
import { getAllPostsForHome } from "../lib/api";
import { imageBuilder } from "../lib/sanity";
import { Author } from "../models";

const Home: NextPage = ({ allPosts, preview }: any) => {
  const heroPost = allPosts[0];
  const nextPosts = allPosts.slice(2, 4);
  const morePosts = allPosts.slice(3);

  return (
    <div>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Blog app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="px-4 lg:px-28 py-8">
          <div className="px-2 min-w-screen flex flex-col lg:flex-row">
            <Image
              className="rounded"
              height={800}
              width={1800}
              src={imageBuilder(heroPost.coverImage).url() ?? ""}
              alt="banner"
            />
            <div className="px-10">
              <div className="py-1 flex flex-row items-center">
                <p className="text-sm text-gray-600">
                  {heroPost.tag[0] ?? "Development"}
                </p>
                <p className="px-2 text-lg text-gray-600">•</p>
                <p className="text-sm text-gray-600">
                  {moment(heroPost.date).format("LL")}
                </p>
              </div>
              <Link href={`/post/${heroPost.slug}`}>
                <a className="py-2 text-xl font-medium hover:text-orange-500 hover:cursor-pointer">
                  {heroPost.title}
                </a>
              </Link>
              <p className="pb-5 text-base text-gray-700">
                {heroPost.description.substring(0, 150)}
              </p>
              <div className="flex flex-row pb-1 lg:pt-20 items-center">
                <Image
                  className="rounded-full"
                  src={heroPost.author.picture ?? ""}
                  alt=""
                  height={50}
                  width={50}
                />
                <div className="px-3 flex flex-col">
                  <p className="text-sm font-medium text-gray-700">
                    {heroPost.author.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {heroPost.author.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-28 py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          {nextPosts.map((post: any) => (
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
        <div className="px-4 lg:px-28 py-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {morePosts.map((post: any) => (
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
        <Pagination totalPage={9} currentPage={9} />
      </Layout>
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}

export default Home;
