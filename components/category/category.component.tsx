import { NextPage } from "next";
import Image from "next/image";
import { CategoryComponentProps } from "../category/category.component.props";

export const Category: NextPage<CategoryComponentProps> = (
  props: CategoryComponentProps
) => {
  const { image, title, description } = props;
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:px-28 py-6 lg:py-8 mb-5 shadow-lg hover:shadow-xl rounded hover:cursor-pointer">
      <div className="flex object-contain ">
        <Image
          className="object-cover"
          height={200}
          width={200}
          src={image}
          alt={title}
        />
      </div>

      <div className="flex flex-col px-5 lg:px-20">
        <h2 className="text-3xl font-medium">{title}</h2>
        <p className="text-l font-normal mt-5">{description}</p>
      </div>
    </div>
  );
};
