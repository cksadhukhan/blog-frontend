import { NextPage } from "next";
import Image from "next/image";
import { BlogComponentProps } from "./blog.component.props";

export const Blog: NextPage<BlogComponentProps> = (
  props: BlogComponentProps
) => {
  const { title, description, tag, date, author, image } = props;
  return (
    <div className="rounded overflow-hidden shadow-lg m-2">
      <Image
        className="rounded"
        height={200}
        width={400}
        layout="responsive"
        src={image}
        alt="banner"
      />
      <div className="px-4">
        <div className="py-1 flex flex-row items-center">
          <p className="text-sm text-gray-600">{tag}</p>
          <p className="px-2 text-lg text-gray-600">•</p>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
        <p className="py-2 text-xl font-medium hover:text-orange-500 hover:cursor-pointer">
          {title}
        </p>
        <p className="pb-5 text-base text-gray-700">{description}</p>
        <div className="flex flex-row pb-5 items-center">
          <Image
            className="rounded-full"
            src={author.getAvatar() ?? ""}
            alt=""
            height={50}
            width={50}
          />
          <div className="px-3 flex flex-col">
            <p className="text-sm font-medium text-gray-700">
              {author.getName()}
            </p>
            <p className="text-sm text-gray-600">{author.getPosition()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
