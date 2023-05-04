import DateFormatter from "../DateFormatter"
import CoverImage from "../CoverImage"
import Link from "next/link"

const HeroPost = ({title, image, date, excerpt, slug}) =>
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={image} slug={slug}/>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]" className="decoration-red font-bold hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date}/>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>

export default HeroPost
