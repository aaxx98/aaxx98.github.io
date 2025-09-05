import * as React from 'react';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

type BreadcrumbProps = {
  info: { name: string; url: string }[];
};

export default function Breadcrumb({ info }: BreadcrumbProps) {
  if (!info || info.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list">
        {info.map((item, idx) => {
          const isLast = idx === info.length - 1;
          return (
            <li key={item.url || `${item.name}-${idx}`} className="breadcrumb-item">
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
                  <FontAwesomeIcon icon={faAngleRight} className="breadcrumb-sep-icon" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
