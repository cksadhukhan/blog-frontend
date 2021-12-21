import Image from "next/image";
import { BlogComponentProps } from "./blog.component.props";

const Blog: React.FC<BlogComponentProps> = (props: BlogComponentProps) => {
  return (
    <div className="rounded overflow-hidden shadow-lg m-2">
      <Image
        className="rounded"
        height={200}
        width={400}
        layout="responsive"
        src="/banner.png"
        alt="banner"
      />
      <div className="px-4"> 
        <div className="py-1 flex flex-row items-center">
          <p className="text-sm text-gray-600">Development</p>
          <p className="px-2 text-lg text-gray-600">•</p>
          <p className="text-sm text-gray-600">November 2, 2021</p>
        </div>
        <p className="py-2 text-xl font-medium hover:text-orange-500 hover:cursor-pointer">Keep your brand consistent with an Illustration Style guide</p>
        <p className="pb-5 text-base text-gray-700">The scenario: The team is growing, with multiple personas creating your brand's visual content. Your Brand Book is a great source of visual</p>
        <div className="flex flex-row pb-5 items-center">
            <Image className="rounded-full" src="/avatar.jpg" height={50} width={50} />
            <div className="px-3 flex flex-col">
                <p className="text-sm font-medium text-gray-700">Chanchal Sadhukhan</p>
                <p className="text-sm text-gray-600">App Developer</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
