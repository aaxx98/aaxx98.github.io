import { Link } from "gatsby";
import React from "react";
import { tagNames } from "../../code/tagName";
import { useTagData } from "../../hooks/useTagData";

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

const TagList = ({ selected }: TagListProps) => {
  const data: TagType = useTagData();
  const tags = data.group;

  return (
    <div className="m-8 mt-12 sm:mt-8 sm:mx-30 lg:mx-60">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">태그로 검색</h1>
      <ul className="flex flex-wrap gap-2 pb-4">
        {tags.map((tag: any) => (
          <Link to={`/tags/${tag.fieldValue}`}>
            <li
              key={tag.fieldValue}
              className={`inline-block px-5 py-2 rounded-full ${
                selected === tag.fieldValue ? "bg-blue-100" : "bg-white"
              }  border-2 border-blue-200 hover:bg-blue-50 hover:shadow-lg transition-shadow duration-300`}
            >
              <span className="text-base font-semibold text-gray-600 hover:text-blue-800 transition duration-300">
                {tagNames[tag.fieldValue]}
              </span>
              <span className="text-sm text-gray-500 mr-1">
                ({tag.totalCount})
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <hr className="border-t border-blue-200" />
    </div>
  );
};

export default TagList;
