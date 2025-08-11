import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type BreadcrumbProps = {
  info: { name: string; url: string }[];
  separator?: React.ReactNode;
  className?: string;
};

export default function Breadcrumb({ info }: BreadcrumbProps) {
  if (!info || info.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="text-sm mb-2 text-blue-400">
      <ol className="flex flex-wrap items-center gap-2">
        {info.map((item, idx) => {
          const isLast = idx === info.length - 1;

          return (
            <li key={item.url} className="flex items-center gap-2">
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-semibold text-gray-400"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="hover:text-gray-900 transition underline"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <StaticImage
                  src="../images/left_icon.png"
                  width={16}
                  height={16}
                  alt="breadcrumb-seperator"
                  className="opacity-40"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
