import DateFormatter from "../DateFormatter"
import CoverImage from "../CoverImage"
import Link from "next/link"

const PostPreview = ({title, image, date, excerpt, slug}) =>
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={image}/>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]" className="decoration-red hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date}/>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>

export default PostPreview
