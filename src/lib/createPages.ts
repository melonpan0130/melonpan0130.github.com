import { CreatePagesArgs, graphql } from 'gatsby';
import path from 'path';
import { Query } from '../graphql-types';

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions;
    

    const { data, errors } = await graphql<Query>(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            html
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `);

    if (errors) {
        throw errors;
    }
    
    const editedData = JSON.parse(JSON.stringify(data));

    editedData.allMarkdownRemark.edges.forEach(({ node }: any) => {
        createPage({
            path: node.frontmatter.title,
            context: {
                html: node.html,
                title: node.frontmatter.title,
            },
            component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
        });
    });
}