import React, { ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';

import Footer from './footer';
import Header from './header';
import mdxComponents from './mdx-components';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-wrapper">
      <Header />
      <MDXProvider components={mdxComponents}>
        <main className="main-content">{children}</main>
      </MDXProvider>
      <Footer />
    </div>
  );
}

export default Layout;
