import {useRouter} from "next/router"
import ErrorPage from "next/error"
import Container from "../../components/Container"
import PostBody from "../../components/PostBody"
import Header from "../../components/Header"
import PostHeader from "../../components/PostHeader"
import Layout from "../../components/Layout"
import {getPostBySlug, getAllPosts} from "../../lib/api"
import PostTitle from "../../components/PostTitle"
import Head from "next/head"
import markdownToHtml from "../../lib/markdownToHtml"

const Post = ({post, preview}) => {
  const router = useRouter()
  const title = `Roberto Schiavone - ${post.title}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404}/>
  }
  return (
      <Layout preview={preview}>
        <Container>
          <Header/>
          {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
          ) : (
              <>
                <article className="mb-32">
                  <Head>
                    <title>{title}</title>
                    <meta property="og:image" content={post.ogImage.url}/>
                  </Head>
                  <PostHeader
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}
                      author={post.author}
                  />
                  <PostBody content={post.content}/>
                </article>
              </>
          )}
        </Container>
      </Layout>
  )
}


const getStaticProps = async ({params}) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Post
export {
  getStaticProps,
  getStaticPaths
}
