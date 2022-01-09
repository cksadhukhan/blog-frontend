import { useState } from "react";
import { Layout } from "../components";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nemail, setNemail] = useState<string>("");
  return (
    <div>
      <Layout>
        <div className="flex flex-col lg:flex-row px-2 py-5 items-center justify-around">
          <div className="">
            <h1 className="text-orange-500 whitespace-nowrap">Contact Us</h1>
            <h3 className="mt-2 text-2xl font-medium">How can we help you?</h3>
            <p className="mt-2 text-l">Fill in the form or drop an email</p>
            <p className="border mt-5 text-sm text-center py-2 px-1 rounded-md">
              example@example.com
            </p>
          </div>

          <div className="bg-gray-100 shadow-lg mt-10 p-16 mx-10 ">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mb-2"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
             focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mb-2"
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mb-2"
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mb-2"
            />
            <button className="w-full rounded-md bg-orange-600 py-2 mt-2 text-white transition duration-300 ease-in-out hover:bg-orange-500 hover:shadow-l">
              Send
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-gray-100 shadow-lg mx-4 my-5 p-3 lg:mx-28 lg:my-10 lg:p-10 justify-between">
          <div className="flex flex-row items-center">
            <SiMinutemailer className="bg-orange-600 text-white text-6xl rounded-full p-3 mx-3" />
            <p className="text-xl font-medium">
              Join the newsletter and read the new posts first
            </p>
          </div>
          <div className="flex flex-row items-center mt-4">
            <input
              type="text"
              value={nemail}
              onChange={(e) => setNemail(e.target.value)}
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500
            disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <button className="block bg-orange-600 py-2 px-6 mx-2 text-white text-center transition duration-300 ease-in-out hover:bg-orange-500 hover:shadow-l">
              Subscribe
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
