import { NextPage } from "next";
import { Footer, LayoutComponentProps, Navbar } from "..";

export const Layout: NextPage<LayoutComponentProps> = (
  props: LayoutComponentProps
) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
