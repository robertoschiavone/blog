import Head from "next/head"

import {Container, HeroPost, Intro, Layout, MoreStories} from "../components"
import {getAllPosts} from "../services/content"

const Page = ({posts}) => {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (<>
    <Layout>
      <Head>
        <title>Roberto Schiavone</title>
      </Head>
      <Container>
        <Intro/>
        {heroPost && (<HeroPost
            title={heroPost.title}
            image={heroPost.image}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
        />)}
        {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
      </Container>
    </Layout>
  </>)
}

const getStaticProps = () => ({
  props: {
    posts: getAllPosts(["title", "date", "slug", "author", "image", "excerpt"])
  }
})


export default Page

export {
  getStaticProps
}
