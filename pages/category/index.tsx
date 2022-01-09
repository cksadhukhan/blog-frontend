import { NextPage } from "next";
import Head from "next/head";
import { Category, Layout } from "../../components";

const CategoryPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Blog app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="px-4 py-5 lg:px-28">
          <Category
            title={"React Js"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic asperiores rerum aliquam odit quas corrupti repellendus nobis facere eius animi quam, ut dolore eligendi."
            }
            image={"/react.png"}
          />
          <Category
            title={"React Js"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic asperiores rerum aliquam odit quas corrupti repellendus nobis facere eius animi quam, ut dolore eligendi."
            }
            image={"/react.png"}
          />
          <Category
            title={"React Js"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic asperiores rerum aliquam odit quas corrupti repellendus nobis facere eius animi quam, ut dolore eligendi."
            }
            image={"/react.png"}
          />
          <Category
            title={"React Js"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic asperiores rerum aliquam odit quas corrupti repellendus nobis facere eius animi quam, ut dolore eligendi."
            }
            image={"/react.png"}
          />
          <Category
            title={"React Js"}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero hic asperiores rerum aliquam odit quas corrupti repellendus nobis facere eius animi quam, ut dolore eligendi."
            }
            image={"/react.png"}
          />
        </div>
      </Layout>
    </div>
  );
};

export default CategoryPage;
