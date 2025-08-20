import React from "react";

export const mdxComponents = {
  h1: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h2 className="text-2xl font-semibold my-3" {...props} />,
  h3: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h2 className="text-xl font-semibold my-3" {...props} />,
  p: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLParagraphElement> &
      React.HTMLAttributes<HTMLParagraphElement>
  ) => <p className="text-gray-700 leading-7" {...props} />,
  ul: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLUListElement> &
      React.HTMLAttributes<HTMLUListElement>
  ) => <ul className="list-disc pl-6 my-2" {...props} />,
  li: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLLIElement> &
      React.LiHTMLAttributes<HTMLLIElement>
  ) => <li className="mb-1" {...props} />,
  a: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLAnchorElement> &
      React.AnchorHTMLAttributes<HTMLAnchorElement>
  ) => <a className="text-blue-500 underline" {...props} />,
};
