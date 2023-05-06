import {useRouter} from "next/router"
import NextError from "next/error"
import {PortableText} from '@portabletext/react'

import {Container, Head, Header, Layout, PostBody, PostHeader, PostTitle} from "../../components";
import {getAllPosts, getPostBySlug} from "../../services/content"

const Post = ({post, preview}) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <NextError statusCode={404}/>
  }
  return (<Layout preview={preview}>
    <Container>
      {router.isFallback ? (<PostTitle>Loading...</PostTitle>) : (<>
        <article className="mb-32">
          <Head title={`Roberto Schiavone - ${post.title}`}/>
          <PostHeader
              title={post.title}
              image={post.image}
              date={post["_createdAt"]}
              author={post.author}
          />
          <PortableText value={post.body}/>
        </article>
      </>)}
    </Container>
  </Layout>)
}

const getStaticProps = async ({params}) => {
  const post = await getPostBySlug(params.slug, ["title", "slug", "_createdAt", "_updatedAt", "body"])

  return {
    props: {
      post: {
        ...post,
        content: JSON.stringify(post["body"]),
      },
    },
  }
}

const getStaticPaths = async () => ({
  paths: (await getAllPosts(["slug"])).map(post => ({
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
