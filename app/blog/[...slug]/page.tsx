import { HAMED_SEDIGHI_PORTRAIT } from '@/constance/my-portrait'
import { formatDate } from '@/utils/format-date'
import { MarkdownOptions } from '@/utils/markdown-options'
import { getSinglePost } from '@/utils/post'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'

interface PostPageProp {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: PostPageProp) => {
  const slug = params.slug
  const post = await getSinglePost(slug)

  return {
    title: `Metro Code | ${post.data.title}`,
  }
}

const PostPage = async ({ params }: PostPageProp) => {
  const slug = params.slug
  const { data, content } = await getSinglePost(slug)

  return (
    <>
      <div className="">
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tighter md:leading-none lg:text-5xl">
          {data.title}
        </h1>
        <div className="flex items-center gap-2 text-gray-400">
          <Image
            src={HAMED_SEDIGHI_PORTRAIT}
            width={45}
            height={45}
            alt="Hamed Sedighi"
            className="rounded-full"
          />
          <small className="flex gap-2">
            <span>Hamed Sedighi</span>/
            <time dateTime={data.date}>{formatDate(data.date)}</time>
          </small>
        </div>
      </div>

      <article className="mt-5">
        <Markdown options={MarkdownOptions}>{content}</Markdown>
      </article>
    </>
  )
}

export default PostPage
