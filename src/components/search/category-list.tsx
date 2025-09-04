import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { categoryNames } from "../../code/categoryName";
import { useCategoryData } from "../../hooks/useCategoryData";

type CategoryListProps = {
  selected?: string;
};

type CategoryType = {
  totalCount: number;
  group: {
    fieldValue: string;
    totalCount: number;
  }[];
};

const CategoryList = ({ selected }: CategoryListProps) => {
  const data: CategoryType = useCategoryData();
  const categories = data.group;

  return (
    <div className="category-list-container">
      <div className="tag-list-header">
        <h1 className="category-list-title">
          <FontAwesomeIcon icon={faBook} className="title-icon" />
          시리즈로 검색
        </h1>
        <div className="total-count">총 {categories.length}개의 시리즈</div>
      </div>
      <div className="category-grid">
        {categories.map((category: any) => (
          <Link
            key={category.fieldValue}
            to={`/categories/${category.fieldValue}`}
            className={`category-card ${
              selected === category.fieldValue ? "active" : ""
            }`}
          >
            <div className="category-name">
              {categoryNames[category.fieldValue] || category.fieldValue}
            </div>
            <div className="category-count">{category.totalCount}개의 글</div>
          </Link>
        ))}
      </div>
      <div className="category-list-divider"></div>
    </div>
  );
};

export default CategoryList;
