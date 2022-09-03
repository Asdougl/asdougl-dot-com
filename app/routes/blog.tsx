import { Outlet } from '@remix-run/react'
import { PageLayout } from '~/layout/PageLayout'

export default function Blog() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  )
}
