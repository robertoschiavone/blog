import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import {unified} from "unified"
import {client} from "./sanity/lib/client";

const getPostBySlug = async (slug, fields = []) => (await client.fetch(`*[_type == 'post' && 
  slug.current == '${slug}'] {
    ${fields.join(", \n")}
  }`))[0]

const getAllPosts = async (fields = []) => {
  if (!fields.includes("_createdAt")) {
    fields = [...fields, "_createdAt"]
  }

  const posts = await client.fetch(`*[_type == 'post'] {${fields.join(", \n")}} | order(_createdAt desc)`)

  if (fields.includes("slug")) {
    return posts.map(post => ({
      ...post,
      slug: post.slug.current
    }))
  } else {
    return posts
  }
}

const render = async markdown => (await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(markdown))

export {
  getPostBySlug,
  getAllPosts,
  render
}
