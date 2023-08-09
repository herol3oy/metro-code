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
        <Link
          key={slug}
          className="flex justify-between rounded-md p-3 shadow-md transition-all duration-300 ease-in-out hover:bg-gray-200"
          href={`/blog/${slug}`}
        >
          <p>{title}</p>
          <small className="text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
          </small>
        </Link>
      ))}
    </div>
  )
}

export default Home
