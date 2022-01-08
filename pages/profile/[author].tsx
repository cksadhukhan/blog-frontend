import moment from "moment";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Blog, Layout } from "../../components";
import { getAllAuthorsWithSlug, getAuthorAndPosts } from "../../lib/api";
import { imageBuilder } from "../../lib/sanity";
import { Author } from "../../models";
import BlockContent from "@sanity/block-content-to-react";

const Profile: NextPage = ({ author, posts, preview }: any) => {
  return (
    <div>
      <Head>
        <title>Blog App | {author?.name}</title>
        <meta name="description" content="Blog app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col lg:flex-row py-6 items-center">
          <div className="flex flex-col flex-1 text-center">
            <div className="object-contain">
              <Image
                className="rounded-full"
                height={100}
                width={100}
                src={imageBuilder(author.picture).url() ?? ""}
                alt="profile"
              />
            </div>
            <h3 className="mt-5 text-3xl font-medium">{author?.name}</h3>
            <h5 className="mt-2 text-xl">{author?.position}</h5>
          </div>

          <div className="flex flex-1 pr-28">
            <p className="text-md font-normal whitespace-normal">
              <BlockContent
                blocks={author.bio}
                projectId={
                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "b1rsx8gb"
                }
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
              />
            </p>
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="px-4 py-4 lg:px-40 lg:py-14">
            <h2 className="text-4xl font-medium text-gray-800">
              Related blog posts
            </h2>
          </div>
          <div className="px-4 lg:px-40 py-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
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
        </div>
      </Layout>
    </div>
  );
};

export async function getStaticProps({ params, preview = false }: any) {
  const data = await getAuthorAndPosts(params.author, preview);
  return {
    props: {
      preview,
      author: data?.author || null,
      posts: data?.posts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allAuthors = await getAllAuthorsWithSlug();
  return {
    paths:
      allAuthors?.map((post: any) => ({
        params: {
          author: post.slug,
        },
      })) || [],
    fallback: false,
  };
}

export default Profile;
