
exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `);

    if (result.errors) {
        reporter.panic("failed to create posts ", result.errors);
    }

    const pages = result.data.allMdx.nodes;

    pages.forEach((page) => {
        actions.createPage({
            path: page.frontmatter.path,
            component: require.resolve("./src/templates/markdown.js"),
            context: {
                pathSlug: page.frontmatter.path,
            },
        });
    });
};

// exports.createPages = async ({ actions, graphql, reporter }) => {
//     const { createPage } = actions;

//     const template = path.resolve(`src/templates/markdown.js`);

//     const result = await graphql(`
//     {
//       allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
//         edges {
//           node {
//             id
//             parent {
//               ... on File {
//                 name
//                 relativeDirectory
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//     // Handle errors
//     if (result.errors) {
//         reporter.panicOnBuild(`Error while running GraphQL query.`);
//         return;
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//             path: urljoin(node.parent.relativeDirectory, node.parent.name),
//             component: template,
//             context: { pageId: node.id }, // additional data can be passed via context
//         });
//     });
// };
