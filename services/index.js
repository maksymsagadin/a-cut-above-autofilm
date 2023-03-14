import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getMain = async () => {
    const query = gql`
    query Main {
        posts(where: {featuredPost: true}) {
            author {
                name
                photo {
                    url
                }
            }
            createdAt
            title
            slug
            featuredImage {
                url
            }
        }
        data(where: {active: true}) {
            aboutSection {
                description
                bannerImage {
                    url
                }
            }
            contact {
                companyName
                phone
                address
                email
                instagram
                affiliateLinks {
                    name
                    url
                }
                logo {
                    url
                }
            }
            featuredSection {
                heading
                subHeading
                description
            }
            findUsSection {
                greeting
                bannerImage {
                    url
                }
            }
            heroSection {
                heading
                subHeading
                greeting
                backgroundImageMobile {
                    url
                }
                backgroundImageDesktop {
                    url
                }
            }
            serviceSection {
                greeting
                services {
                    serviceTitle
                    serviceDescription
                }
            }
        }
    }
    `

    const result = await request(graphqlAPI, query)
    return result
}

export const getBlog = async () => {
    const query = gql`
        query GetBlog {
            data(where: {active: true}) {
                contact {
                    companyName
                    phone
                    address
                    email
                    instagram
                    affiliateLinks {
                        name
                        url
                    }
                    logo {
                        url
                    }
                }
            }
            categories {
                name
                slug
            }
            posts(orderBy: createdAt_DESC) {
                slug
                title
                createdAt
                description
                categories {
                    name
                    slug
                }
                featuredPost
                featuredImage {
                    url
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
    const result = await request(graphqlAPI, query)
    return result
}

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            data(where: {active: true}) {
                contact {
                    companyName
                    phone
                    address
                    email
                    instagram
                    affiliateLinks {
                        name
                        url
                    }
                    logo {
                        url
                    }
                }
            }
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
    return result
}

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
            posts(orderBy: createdAt_DESC) {
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
    `
    const result = await request(graphqlAPI, query)
    return result.posts
}



export const getRecentPosts = async () => {
    const query = gql`
        query GetRecentPosts {
            posts(
                orderBy: createdAt_DESC
                last: 6
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
    return result.posts
}

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetSimilarPosts($slug: String!, $categories: [String!]) {
            posts(
                where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories}}}
                orderBy: createdAt_DESC
                last: 6
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
            data(where: {active: true}) {
                contact {
                    companyName
                    phone
                    address
                    email
                    instagram
                    affiliateLinks {
                        name
                        url
                    }
                    logo {
                        url
                    }
                }
            }
            posts(where: {categories_some: {slug: $slug}}) {
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
    `
    const result = await request(graphqlAPI, query, { slug })
    return result
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