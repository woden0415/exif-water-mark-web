import Layout, { NestedLayout } from "@/components/layout";
import { AppProps } from "next/app";
import { PropsWithChildren, ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const About: NextPageWithLayout = () => {
  return <h1>about</h1>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};
export default About;
