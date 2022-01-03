import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Layout } from "../components";

const NotFound: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Blog app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="px-4 lg:px-28 py-8">
          <h1>Not Found</h1>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;
