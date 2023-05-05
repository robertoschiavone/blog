import DateFormatter from "../DateFormatter"
import CoverImage from "../CoverImage"
import PostTitle from "../PostTitle"

const PostHeader = ({title, image, date}) =>
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={image}/>
      </div>
      <div className="max-w-sm ml-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date}/>
        </div>
      </div>
    </>

export default PostHeader
