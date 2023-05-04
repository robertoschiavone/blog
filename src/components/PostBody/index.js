import markdownStyles from "./post-body.module.css"

const PostBody = ({content}) =>
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{__html: content}}/>
    </div>

export default PostBody
