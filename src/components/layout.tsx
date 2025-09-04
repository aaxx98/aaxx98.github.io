import React, { ReactNode } from "react";
import Header from "./header";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./mdx-components";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <MDXProvider components={mdxComponents}>
        <main className="main-content">{children}</main>
      </MDXProvider>
      <Footer />
    </div>
  );
};

export default Layout;
