import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        createdAt
                        slug
                        title
                        description
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges.reverse()
}

export const getPostDetails = async (slug) => {
    const query = gql`
    query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
            createdAt
            slug
            title
            description
            featuredImage {
                url
            }
            content {
                raw
            }
            categories {
                name
                slug
            }
            author {
                bio
                id
                name
                photo {
                    url
                }
            }
        }
    }
    `
    const result = await request(graphqlAPI, query, { slug })
    return result.post
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetRecentPosts {
            posts(
                orderBy: createdAt_ASC
                last: 3
            ) {
                title
                slug
                createdAt
                featuredImage {
                    url
                }
            }
        }
    `
    const result = await request(graphqlAPI, query)
    result.posts.reverse()
    return result.posts
}

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetSimilarPosts($slug: String!, $categories: [String!]) {
            posts(
                where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories}}}
                last: 3
            ) {
                title
                slug
                createdAt
                featuredImage {
                    url
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, {categories, slug} )
    return result.posts
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query)
    // Sorting Categories Alphabetically
    result.categories.sort(function(a,b) {
        let nameA = a.name.toLowerCase()
        let nameB = b.name.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
    })
    return result.categories
}

export const getCategoryPost = async (slug) => {
    const query = gql`
        query GetCategoryPost ($slug: String!) {
            postsConnection (where: {categories_some: {slug: $slug}}) {
                edges {
                    node {
                        createdAt
                        slug
                        title
                        description
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug })
    return result.postsConnection.edges
}

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
  
    return result.json()
}

export const getComments = async (slug) => {
    const query = gql`
        query GetComments($slug: String!) {
            comments(where: { post: { slug: $slug } }) {
                name
                createdAt
                comment
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug })
    return result.comments
}

export const getFeaturedPosts = async () => {
    const query = gql`
        query GetFeaturedPosts {
            posts(where: {featuredPost: true}) {
                title
                slug
                createdAt
                featuredImage {
                    url
                }
                author {
                    name
                    photo {
                        url
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query)
    return result.posts.reverse()
}