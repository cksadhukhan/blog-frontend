import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Blog, Layout, Pagination } from "../../components";
import { Author } from "../../models";

const Page: NextPage = () => {
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
              src="/banner-hero.png"
              alt="banner"
            />
            <div className="px-10">
              <div className="py-1 flex flex-row items-center">
                <p className="text-sm text-gray-600">Development</p>
                <p className="px-2 text-lg text-gray-600">•</p>
                <p className="text-sm text-gray-600">November 2, 2021</p>
              </div>
              <p className="py-2 text-xl font-medium hover:text-orange-500 hover:cursor-pointer">
                Keep your brand consistent with an Illustration Style guide
              </p>
              <p className="pb-5 text-base text-gray-700">
                The scenario: The team is growing, with multiple personas
                creating your brand&apos;s visual content. Your Brand Book is a
                great source of visual
              </p>
              <div className="flex flex-row pb-1 lg:pt-20 items-center">
                <Image
                  className="rounded-full"
                  src="/avatar.jpg"
                  alt=""
                  height={50}
                  width={50}
                />
                <div className="px-3 flex flex-col">
                  <p className="text-sm font-medium text-gray-700">
                    Chanchal Sadhukhan
                  </p>
                  <p className="text-sm text-gray-600">App Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-28 py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
        </div>
        <div className="px-4 lg:px-28 py-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
          <Blog
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={new Author("Chanchal Sadhukhan", "App Developer")}
          />
        </div>
        <Pagination totalPage={9} currentPage={9} />
      </Layout>
    </div>
  );
};

export default Page;
