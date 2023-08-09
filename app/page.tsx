import AboutMe from '@/components/AboutMe'
import { formatDate } from '@/utils/format-date'
import { getAllPosts } from '@/utils/post'
import Link from 'next/link'

interface BlogPost {
  title: string
  date: string
  subtitle: string
  slug: string
}

const Home = async () => {
  const postMetadata: BlogPost[] = await getAllPosts()
  const sortedPosts = postMetadata.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="flex flex-col gap-5">
      <AboutMe />
      <h1 className="text-2xl font-bold">Recent notes</h1>
      {sortedPosts.map(({ slug, title, date }) => (
        <div className="flex justify-between" key={slug}>
          <Link
            className="w-fit transition-all duration-500 hover:text-gray-600"
            href={`/blog/${slug}`}
          >
            <p>{title}</p>
          </Link>
          <small className="text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
          </small>
        </div>
      ))}
    </div>
  )
}

export default Home
