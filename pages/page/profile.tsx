import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Layout } from "../../components";

const Profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog App</title>
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
                src="/profile.jpeg"
                alt="profile"
              />
            </div>
            <h3 className="mt-5 text-3xl font-medium">Ritu Mondal</h3>
            <h5 className="mt-2 text-xl">Web Developer</h5>
          </div>

          <div className="flex flex-1 pr-28">
            <p className="text-md font-normal whitespace-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              sit voluptatibus, earum beatae illo ad accusamus rem ea facere
              explicabo?Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Consectetur, esse inventore. Harum reiciendis voluptate
              nobis velit ea mollitia quam commodi!
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
