const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const CategoryPageTemplate = path.resolve(
    `./src/templates/category-page.tsx`
  );
  const CategoryListPageTemplate = path.resolve(
    `./src/templates/category-list-page.tsx`
  );

  const result = await graphql(`
    {
      allMdx {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const categories = result.data.allMdx.group;

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
};
