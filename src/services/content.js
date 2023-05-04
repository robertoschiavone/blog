import fs from "fs"
import {join} from "path"

import matter from "gray-matter"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import {unified} from "unified"

const postsDirectory = join(process.cwd(), "content/posts")

const getPostSlugs = () => fs.readdirSync(postsDirectory)

const getPostBySlug = (slug, fields = []) => {
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const {data, content} = matter(fileContents)

  const items = {}

  // ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug
    }
    if (field === "content") {
      items[field] = content
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field]
    }
  })

  return items
}

const getAllPosts = (fields = []) => {
  let slugs = []
  try {
    slugs = getPostSlugs()
  } catch (exception) {
    console.error(exception.message)
  }

  return slugs.map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

const render = async markdown => (await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(markdown))

export {
  getPostSlugs,
  getPostBySlug,
  getAllPosts,
  render
}
