import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Blog, Layout } from "../../components";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { imageBuilder } from "../../lib/sanity";
import moment from "moment";
import BlockContent from "@sanity/block-content-to-react";

const BlogPage: NextPage = ({ post, morePosts, preview }: any) => {
  const router = useRouter();

  console.log("Post: " + JSON.stringify(post));

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const getLink = () => {
    return `learnwithus.com/post/${post.slug}`;
  };

  return (
    <>
      <Head>
        <title>{post?.title ?? "Blog App"}</title>
        <meta
          name="description"
          content={post?.description ?? "No Description"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="px-4 lg:px-[20rem] pt-2 lg:pt-10">
          <div className="py-1 lg:px-10 flex flex-row items-center">
            <p className="text-md text-gray-600">{post.tag}</p>
            <p className="px-2 text-lg text-gray-600">•</p>
            <p className="text-md text-gray-600">
              {moment(post.date).format("LL")}
            </p>
          </div>

          <h1 className="lg:px-10 py-4 text-5xl font-bold">{post.title}</h1>
          <div className="py-5 text-center">
            <Image
              height={400}
              width={800}
              layout="responsive"
              src={imageBuilder(post.coverImage).url() ?? ""}
              alt=""
            />
          </div>
          <div className="lg:px-10">
            <div className="max-w-2xl mx-auto">
              <BlockContent
                blocks={post.body}
                projectId={
                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "b1rsx8gb"
                }
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
              />
            </div>
            {/* <h2 className="py-6 text-3xl font-medium">
            What&apos;s the Pixel Kit?
          </h2>
          <p className="pb-6 text-xl text-gray-800 font-['alegreya'] leading-8 tracking-wide">
            In a few words, it&apos;s a celebration of our Pixelmatters&apos;
            pride. We wanted to celebrate our passionate team with something
            they could proudly carry everywhere. That meant making it cool, but
            mostly, making it inclusive. Embodying a dynamic working culture
            into a 40x30cm box was a challenge that the Marketing team gladly
            took on. Now that the Kit is in the teams&apos; hands, we
            couldn&apos;t be happier.
          </p>
        </div>
        <div className="pb-10 text-center">
          <Image
            height={300}
            width={700}
            layout="responsive"
            src="/blogimg1.png"
            alt=""
          />
        </div>
        <div className="px-3 lg:px-10">
          <h2 className="py-4 lg:py-10 text-3xl font-medium">
            A team effort in a Box
          </h2>
          <p className="lg:pb-10 text-xl text-gray-800 font-['alegreya'] leading-8 tracking-wide">
            This Pixel Kit represents months of collaboration. From the
            Marketing to the People Operations team, everyone did their best to
            embody the Pixel culture in a small package, and we can&apos;t wait
            to see it being used out there.
          </p> */}
            <p className="py-4 lg:py-16 text-xl font-bold italic text-gray-700">
              Follow Pixelmatters on{" "}
              <Link href="/" passHref>
                <a className="text-orange-600 underline hover:opacity-50">
                  Twitter
                </a>
              </Link>
              ,&nbsp;
              <Link href="/" passHref>
                <a className="text-orange-600 underline hover:opacity-50">
                  Facebook
                </a>
              </Link>
              , &nbsp;
              <Link href="/" passHref>
                <a className="text-orange-600 underline hover:opacity-50">
                  LinkedIn
                </a>
              </Link>
              ,&nbsp; and &nbsp;
              <Link href="/" passHref>
                <a className="text-orange-600 underline hover:opacity-50">
                  Instagram
                </a>
              </Link>
            </p>
            <hr className="text-gray-300" />
            <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row md:justify-between lg:justify-between pb-16">
              <div className="flex flex-row pb-5 items-center py-7">
                <Image
                  className="rounded-full"
                  src={post.author.picture ?? ""}
                  alt=""
                  height={50}
                  width={50}
                />
                <div className="px-4 flex flex-col">
                  <p className="text-md font-bold text-gray-700">
                    {post.author.name}
                  </p>
                  <p className="text-md text-gray-600">
                    {post.author.position}
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <p className="text-l text-gray-700 px-3">Share:</p>
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                    getLink()
                  )}`}
                >
                  <BsFacebook className="px-3 text-5xl hover:cursor-pointer hover:scale-125 hover:shadow-lg" />
                </a>
                <a
                  target="_blank"
                  href={`http://twitter.com/share?text=${
                    post.title
                  }&url=${encodeURI(getLink())}&hashtags=${post.tag}`}
                >
                  <BsTwitter className="px-3 text-5xl hover:cursor-pointer hover:scale-125 hover:shadow-lg" />
                </a>
                <a
                  target="_blank"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(
                    getLink()
                  )}`}
                >
                  <BsLinkedin className="px-3 text-5xl hover:cursor-pointer hover:scale-125 hover:shadow-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="px-4 py-4 lg:px-40 lg:py-14">
            <h2 className="text-4xl font-medium text-gray-800">
              Related blog posts
            </h2>
          </div>
          <div className="px-4 lg:px-40 py-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps({ params, preview = false }: any) {
  console.log("Params: " + params);
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post: any) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

export default BlogPage;
