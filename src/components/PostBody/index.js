import markdownStyles from "./post-body.module.css"

const PostBody = ({content}) =>
    <div className="max-w-4xl mx-auto text-4xl font-serif">
      <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{__html: content}}/>
    </div>

export default PostBody
