import { Link } from "gatsby";
import React from "react";
import { useCategorydata } from "../../hooks/useCategoryData";

type CategoryList = {
  selected?: string;
};

type CategoryType = {
  totalCount: number;
  group: {
    fieldValue: string;
    totalCount: number;
  }[];
};

const CategoryList = ({ selected }: CategoryList) => {
  const data: CategoryType = useCategorydata();
  const categories = data.group;

  return (
    <div className="m-8 mt-12 sm:mt-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        카테고리로 검색
      </h1>
      <ul className="space-y-4">
        {categories.map((category: any) => (
          <li
            key={category.fieldValue}
            className={`inline-block px-5 py-2 rounded-full ${
              selected === category.fieldValue ? "bg-blue-100" : "bg-white"
            }  border-2 border-blue-200 hover:bg-blue-50 hover:shadow-lg transition-shadow duration-300 mr-2`}
          >
            <span className="text-base font-semibold text-gray-600 hover:text-blue-800 transition duration-300">
              <Link to={`/categories/${category.fieldValue}`}>
                {category.fieldValue}
              </Link>
            </span>
            <span className="text-sm text-gray-500 mr-1">
              ({category.totalCount})
            </span>
          </li>
        ))}
      </ul>
      <hr className="border-t border-blue-200" />
    </div>
  );
};

export default CategoryList;
