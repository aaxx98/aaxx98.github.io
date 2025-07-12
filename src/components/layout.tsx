import React, { ReactNode } from "react";
import Header from "./header";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./mdx-components";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <MDXProvider components={mdxComponents}>
        <main>{children}</main>
      </MDXProvider>
    </div>
  );
};

export default Layout;
