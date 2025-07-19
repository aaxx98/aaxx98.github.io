const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const CategoryPageTemplate = path.resolve(
    `./src/templates/category-page.tsx`
  );
  const CategoryListPageTemplate = path.resolve(
    `./src/templates/category-list-page.tsx`
  );
  const TagPageTemplate = path.resolve(`./src/templates/tag-page.tsx`);
  const TagListPageTemplate = path.resolve(`./src/templates/tag-list-page.tsx`);

  const result = await graphql(`
    {
      allMdx {
        categories: group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
          totalCount
        }
        tags: group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const categories = result.data.allMdx.categories;
  const tags = result.data.allMdx.tags;

  categories.forEach((category) => {
    createPage({
      path: `/categories/${encodeURIComponent(category.fieldValue)}`,
      component: CategoryPageTemplate,
      context: {
        category: {
          name: category.fieldValue,
          count: category.totalCount,
        },
        categoryName: category.fieldValue,
      },
    });
  });

  createPage({
    path: "/categories",
    component: CategoryListPageTemplate,
  });

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${encodeURIComponent(tag.fieldValue)}`,
      component: TagPageTemplate,
      context: {
        tag: {
          name: tag.fieldValue,
          count: tag.totalCount,
        },
        tagName: tag.fieldValue,
      },
    });
  });

  createPage({
    path: "/tags",
    component: TagListPageTemplate,
  });
};
