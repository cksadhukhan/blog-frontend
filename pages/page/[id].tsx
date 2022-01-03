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
        <div className="px-4 lg:px-28 py-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <Blog
            image="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={
              new Author({
                name: "John Doe",
                position: "App Developer",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
              })
            }
          />
          <Blog
            image="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={
              new Author({
                name: "John Doe",
                position: "App Developer",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
              })
            }
          />
          <Blog
            image="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={
              new Author({
                name: "John Doe",
                position: "App Developer",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
              })
            }
          />
          <Blog
            image="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={
              new Author({
                name: "John Doe",
                position: "App Developer",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
              })
            }
          />
          <Blog
            image="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={
              new Author({
                name: "John Doe",
                position: "App Developer",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
              })
            }
          />
          <Blog
            image="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            title="Keep your brand consistent with an Illustration Style guide"
            description="The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual"
            date="November 2, 2021"
            tag="Development"
            author={
              new Author({
                name: "John Doe",
                position: "App Developer",
                avatar:
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
              })
            }
          />
        </div>
        <Pagination totalPage={9} currentPage={9} />
      </Layout>
    </div>
  );
};

export default Page;
