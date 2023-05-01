import Container from "../components/Container"
import MoreStories from "../components/MoreStories"
import HeroPost from "../components/HeroPost"
import Intro from "../components/Intro"
import Layout from "../components/Layout"
import {getAllPosts} from "../lib/api"
import Head from "next/head"

const Page = ({allPosts}) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
      <>
        <Layout>
          <Head>
            <title>Roberto Schiavone</title>
          </Head>
          <Container>
            <Intro/>
            {heroPost && (
                <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
          </Container>
        </Layout>
      </>
  )
}
const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  return {
    props: {allPosts},
  }
}
export default Page

export {
  getStaticProps
}