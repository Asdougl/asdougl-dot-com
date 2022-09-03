import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { prisma } from '~/db/client'

dayjs.extend(LocalizedFormat)

const getData = async () => {
  return await prisma.post.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { publishedAt: 'asc' },
  })
}

export const loader: LoaderFunction = async () => {
  return json(await getData())
}

export default function Blog() {
  const data = useLoaderData<ReturnType<typeof getData>>()

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-4">
      {data.map((post) => (
        <Link
          key={post.id}
          to={`/blog/${post.slug}`}
          className="group flex h-full w-full flex-col gap-2 px-6 py-4"
        >
          <h3 className="font-display text-4xl font-bold tracking-wide group-hover:underline">
            {post.title}
          </h3>
          <div className="text-xl text-white/60">
            {dayjs(post.publishedAt).format('LL')}
          </div>
        </Link>
      ))}
    </div>
  )
}
