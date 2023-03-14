import { useRouter } from 'next/router'
import { getPostDetails, getPosts } from '../../services'
import { Header, Footer, PostDetail, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components'


const PostDetails = ({ post, contact }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <Loader />
    }
    return (
        <div className='mx-auto mt-28 px-4 sm:px-8 mb-8'>
            <Header logoURL={contact.logo.url} />
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                <div className='col-span-1 lg:col-span-9'>
                    <PostDetail post={post} />
                    <Author author={post.author} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>
                <div className='col-span-1 lg:col-span-3'>
                    <div className='relative lg:sticky lg:top-8'>
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                    </div>
                </div>
            </div>
            <Footer contact={contact}/>
        </div>
    )
}

export default PostDetails
// Fetch data at build time
export async function getStaticProps({ params }) {
    const results = await getPostDetails( params.slug )
      // Cache the data for 1 hour (3600 seconds)
    return {
        props: { 
            post: results.post, contact: results.data.contact 
        },
        revalidate: 3600 // Regenerate the page every hour
    }
}

export async function getStaticPaths() {
    const posts = await getPosts()
    return {
        paths: posts.map(({ slug }) => ({ params: {slug} })),
        fallback: true,
    }
}