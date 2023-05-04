import {useRouter} from "next/router"
import ErrorPage from "next/error"
import Container from "../../components/Container"
import PostBody from "../../components/PostBody"
import Header from "../../components/Header"
import PostHeader from "../../components/PostHeader"
import Layout from "../../components/Layout"
import PostTitle from "../../components/PostTitle"
import Head from "next/head"
import {getAllPosts, getPostBySlug, render} from "../../services/content"

const Post = ({post, preview}) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404}/>
  }
  return (<Layout preview={preview}>
    <Container>
      <Header/>
      {router.isFallback ? (<PostTitle>Loading...</PostTitle>) : (<>
        <article className="mb-32">
          <Head>
            <title>{`Roberto Schiavone - ${post.title}`}</title>
            <meta property="og:image" content={post.image}/>
          </Head>
          <PostHeader
              title={post.title}
              image={post.image}
              date={post.date}
              author={post.author}
          />
          <PostBody content={post.content}/>
        </article>
      </>)}
    </Container>
  </Layout>)
}

const getStaticProps = async ({params}) => {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "author", "image", "content"])

  const {value: content} = await render(post["content"])

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

const getStaticPaths = () => ({
  paths: getAllPosts(["slug"]).map(post => ({
        params: {
          slug: post.slug,
        },
      })
  ),
  fallback: false
})

export default Post

export {
  getStaticProps,
  getStaticPaths,
}
