import {Head, Intro, Layout, Notes, Spacer} from "../components"
import {getAllPosts} from "../services/content"

const Page = ({posts}) =>
    <>
      <Head title="Roberto Schiavone"/>
      <Layout>
        <Intro/>
        <Spacer/>
        <Notes posts={posts}/>
      </Layout>
    </>

const getStaticProps = async () => ({
  props: {
    posts: await getAllPosts(["_id", "title", "slug"])
  }
})

export default Page

export {
  getStaticProps
}
