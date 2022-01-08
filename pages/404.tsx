import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Layout } from "../components";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Blog app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col py-10 px-28">
          <div className="flex flex-col lg:flex-row justify-evenly">
            <Image
              className="rounded"
              height={350}
              width={450}
              src="/error.png"
              alt="banner"
            />
            <div className="px-3 my-6">
              <div className="py-1 flex flex-col items-center lg:items-start">
                <button className="text-sm bg-gray-400 font-medium text-white py-2 px-2 border hover:border-gray-800 hover:border-transparent rounded-full">
                  Page not found
                </button>

                <h1 className="text-5xl font-extrabold py-4">
                  Oh No&#33; Error 404
                </h1>

                <p className="text-lg whitespace-nowrap text-right ">
                  Maybe Bigfoot has broken this page.
                </p>
                <p className="text-lg whitespace-nowrap text-right pb-4">
                  Comeback to the homepage
                </p>

                <div className="flex flex-row items-center justify-center">
                  <button className="text-md py-2 px-3 mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded-full ">
                    <Link href="/">
                      <a>Back to Homepage</a>
                    </Link>
                  </button>

                  <button className="text-md py-2 px-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded-full">
                    Visit our help center
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
