import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { Markdown } from '~/components/Markdown'
import { prisma } from '~/db/client'

dayjs.extend(LocalizedFormat)

const loadData = async (slug: string | undefined) => {
  return await prisma.post.findFirst({
    where: { slug: slug, status: 'PUBLISHED' },
    include: {
      author: { select: { id: true, name: true, image: true } },
      images: {
        where: { verified: true },
        select: { id: true, filename: true, alttext: true },
      },
    },
  })
}

export const loader: LoaderFunction = async ({ params }) => {
  return json(await loadData(params.blogSlug))
}

export default function BlogSlug() {
  const data = useLoaderData<ReturnType<typeof loadData>>()

  return (
    <div className="mx-auto max-w-screen-md">
      <div className="pb-12">
        <div className="pb-4">
          <Link to="/blog">Back</Link>
        </div>
        {data ? (
          <>
            <div className="pb-12">
              <h2 className="font-display text-6xl font-bold">{data.title}</h2>
              <div className="py-4 text-lg text-white/40 text-opacity-70">
                {data.author ? (
                  <>{data.author.name} &bull; </>
                ) : (
                  <>Unknown Author &bull; </>
                )}
                {dayjs(data.publishedAt).format('LL')}
              </div>
            </div>
            <article className="prose prose-invert max-w-none prose-headings:font-display prose-p:text-justify prose-code:font-mono prose-pre:overflow-visible prose-pre:overflow-x-auto lg:prose-xl">
              <Markdown>{data.content}</Markdown>
            </article>
          </>
        ) : (
          <div>Post not found :(</div>
        )}
      </div>
    </div>
  )
}
