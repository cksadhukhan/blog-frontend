import React from "react";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-2 lg:mt-5">
      <div className="flex flex-row justify-between bg-zinc-900 px-10 lg:px-28 py-2 lg:py-5 items-center">
        <h4 className="text-2xl font-bold text-white">Blog</h4>
        {/* Social media links */}
        <div className="flex flex-row ">
          <BsFacebook
            className="px-3 text-5xl text-white hover:cursor-pointer hover:scale-125 hover:shadow-lg"
            onClick={() => {}}
          />
          <BsTwitter
            className="px-3 text-5xl text-white hover:cursor-pointer hover:scale-125 hover:shadow-lg"
            onClick={() => {}}
          />
          <BsLinkedin
            className="px-3 text-5xl text-white hover:cursor-pointer hover:scale-125 hover:shadow-lg"
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between bg-black px-10 lg:px-28 py-2 lg:py-5 items-center">
        <div className="flex flex-row items-center">
          <Link href="/" passHref>
            <a className="text-gray-200 text-sm hover:underline hover:opacity-50">
              Privacy policy
            </a>
          </Link>
          <p className="px-2 text-lg text-gray-600">•</p>
          <Link href="/" passHref>
            <a className="text-gray-200 text-sm hover:underline hover:opacity-50">
              Cookies policy
            </a>
          </Link>
          <p className="px-2 text-lg text-gray-600">•</p>
          <Link href="/" passHref>
            <a className="text-gray-200 text-sm hover:underline hover:opacity-50">
              Contact us
            </a>
          </Link>
        </div>

        <p className="text-gray-200 text-sm">
          &copy; {new Date().getFullYear()} Blog
        </p>
      </div>
    </div>
  );
};

export default Footer;
