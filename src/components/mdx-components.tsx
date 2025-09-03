import React from "react";

export const mdxComponents = {
  // 헤더
  h1: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => (
    <h1
      className="text-4xl font-bold my-6 text-gray-900 border-b border-gray-200 pb-2"
      {...props}
    />
  ),

  h2: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h2 className="text-3xl font-semibold my-5 text-gray-800" {...props} />,

  h3: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h3 className="text-2xl font-semibold my-4 text-gray-800" {...props} />,

  h4: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h4 className="text-xl font-medium my-3 text-gray-700" {...props} />,

  h5: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h5 className="text-lg font-medium my-2 text-gray-700" {...props} />,

  h6: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>
  ) => <h6 className="text-base font-medium my-2 text-gray-600" {...props} />,

  // 텍스트 요소들
  p: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLParagraphElement> &
      React.HTMLAttributes<HTMLParagraphElement>
  ) => <p className="text-gray-700 leading-7" {...props} />,

  // 리스트 요소들
  ul: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLUListElement> &
      React.HTMLAttributes<HTMLUListElement>
  ) => <ul className="list-disc pl-6 my-4 space-y-1" {...props} />,

  ol: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLOListElement> &
      React.OlHTMLAttributes<HTMLOListElement>
  ) => <ol className="list-decimal pl-6 my-3 space-y-1" {...props} />,

  li: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLLIElement> &
      React.LiHTMLAttributes<HTMLLIElement>
  ) => <li className="text-gray-700 leading-6" {...props} />,

  // 링크
  a: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLAnchorElement> &
      React.AnchorHTMLAttributes<HTMLAnchorElement>
  ) => (
    <a
      className="text-blue-600 underline hover:text-blue-800 transition-colors"
      {...props}
    />
  ),

  // 강조 텍스트
  strong: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLElement> &
      React.HTMLAttributes<HTMLElement>
  ) => <strong className="font-semibold text-gray-900" {...props} />,

  em: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLElement> &
      React.HTMLAttributes<HTMLElement>
  ) => <em className="italic text-gray-800" {...props} />,

  // 인용구
  blockquote: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLQuoteElement> &
      React.BlockquoteHTMLAttributes<HTMLQuoteElement>
  ) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-600 bg-gray-50 py-2"
      {...props}
    />
  ),

  // 코드
  code: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLElement> &
      React.HTMLAttributes<HTMLElement>
  ) => (
    <code
      className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800"
      {...props}
    />
  ),

  pre: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLPreElement> &
      React.HTMLAttributes<HTMLPreElement>
  ) => (
    <pre className="!rounded-lg p-4 overflow-x-auto my-4 text-sm" {...props} />
  ),

  // 구분선
  hr: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHRElement> &
      React.HTMLAttributes<HTMLHRElement>
  ) => <hr className="border-gray-300 my-8" {...props} />,

  // 테이블
  table: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableElement> &
      React.TableHTMLAttributes<HTMLTableElement>
  ) => (
    <table
      className="w-full border-collapse my-4 border border-gray-200"
      {...props}
    />
  ),

  thead: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableSectionElement> &
      React.HTMLAttributes<HTMLTableSectionElement>
  ) => <thead className="bg-gray-50" {...props} />,

  tbody: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableSectionElement> &
      React.HTMLAttributes<HTMLTableSectionElement>
  ) => <tbody {...props} />,

  tr: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableRowElement> &
      React.HTMLAttributes<HTMLTableRowElement>
  ) => <tr className="border-b border-gray-200" {...props} />,

  th: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableCellElement> &
      React.ThHTMLAttributes<HTMLTableCellElement>
  ) => (
    <th
      className="px-4 py-2 text-left font-semibold text-gray-900"
      {...props}
    />
  ),

  td: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableCellElement> &
      React.TdHTMLAttributes<HTMLTableCellElement>
  ) => <td className="px-4 py-2 text-gray-700" {...props} />,

  // 이미지
  img: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>
  ) => (
    <img className="max-w-full h-auto my-4 rounded-lg shadow-sm" {...props} />
  ),
};
