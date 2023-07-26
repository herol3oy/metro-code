import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getSinglePost = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  return matterResult
}

export const getAllPosts = async () => {
  const files = fs.readdirSync(postsDirectory)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    }
  })

  return posts
}
