import React from 'react';

import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

import tagNames from '../../code/tagName';
import { useTagData } from '../../hooks/useTagData';

type TagListProps = {
  selected?: string;
};

type TagType = {
  totalCount: number;
  group: {
    fieldValue: string;
    totalCount: number;
  }[];
};

function TagList({ selected = '' }: TagListProps) {
  const data: TagType = useTagData();
  const tags = data.group;

  return (
    <div className="tag-list-container">
      <div className="tag-list-header">
        <h1 className="tag-list-title">
          <span className="title-icon">
            <FontAwesomeIcon icon={faHashtag} className="title-icon" />
          </span>
          태그로 검색
        </h1>
        <div className="total-count">총 {tags.length}개의 태그</div>
      </div>

      <div className="tag-flex-container">
        {tags.map((tag: any) => (
          <Link
            key={tag.fieldValue}
            to={`/tags/${tag.fieldValue}`}
            className={`tag-item ${selected === tag.fieldValue ? 'active' : ''}`}
          >
            <span className="tag-name">{tagNames[tag.fieldValue] || tag.fieldValue}</span>
            <span className="tag-count">({tag.totalCount})</span>
          </Link>
        ))}
      </div>

      <div className="tag-list-divider" />
    </div>
  );
}

export default TagList;
