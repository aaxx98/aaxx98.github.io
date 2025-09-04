import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type BreadcrumbProps = {
  info: { name: string; url: string }[];
  separator?: React.ReactNode;
  className?: string;
};

export default function Breadcrumb({ info, separator }: BreadcrumbProps) {
  if (!info || info.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className={`breadcrumb`}>
      <ol className="breadcrumb-list">
        {info.map((item, idx) => {
          const isLast = idx === info.length - 1;
          return (
            <li
              key={item.url || `${item.name}-${idx}`}
              className="breadcrumb-item"
            >
              {isLast ? (
                <span aria-current="page" className="breadcrumb-current">
                  {item.name}
                </span>
              ) : (
                <Link to={item.url} className="breadcrumb-link">
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span className="breadcrumb-sep">
                  {separator ?? (
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="breadcrumb-sep-icon"
                    />
                  )}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
