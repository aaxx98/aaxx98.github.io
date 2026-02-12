import React from 'react';

const cx = (...cls: (string | undefined)[]) => cls.filter(Boolean).join(' ');

const mdxComponents = {
  // 헤더
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className={cx('mdx-h1', props.className)} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={cx('mdx-h2', props.className)} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className={cx('mdx-h3', props.className)} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 {...props} className={cx('mdx-h4', props.className)} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 {...props} className={cx('mdx-h5', props.className)} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 {...props} className={cx('mdx-h6', props.className)} />
  ),

  // 텍스트
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={cx('mdx-p', props.className)} />
  ),

  // 리스트
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className={cx('mdx-ul', props.className)} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className={cx('mdx-ol', props.className)} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li {...props} className={cx('mdx-li', props.className)} />
  ),

  // 링크
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className={cx('mdx-a', props.className)} />
  ),

  // 강조
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className={cx('mdx-strong', props.className)} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em {...props} className={cx('mdx-em', props.className)} />
  ),

  // 인용
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className={cx('mdx-blockquote', props.className)} />
  ),

  // 코드
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className={cx('mdx-code', props.className)} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className={cx('mdx-pre', props.className)} />
  ),

  // 구분선
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr {...props} className={cx('mdx-hr', props.className)} />
  ),

  // 테이블
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="mdx-table-wrapper">
      <table {...props} className={cx('mdx-table', props.className)} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead {...props} className={cx('mdx-thead', props.className)} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} className={cx('mdx-tbody', props.className)} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr {...props} className={cx('mdx-tr', props.className)} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th {...props} className={cx('mdx-th', props.className)} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} className={cx('mdx-td', props.className)} />
  ),

  // 이미지
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} className={cx('mdx-img', props.className)} />
  ),
};

export default mdxComponents;
