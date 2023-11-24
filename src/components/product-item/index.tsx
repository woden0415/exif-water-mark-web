import { ProductItem } from '@/types'
import { Suspense } from 'react'
import Loading from '../loading'

import { useRouter } from 'next/router'
export default function ProductItem({ info }: { info: ProductItem }) {
  const router = useRouter()

  const jumpDetail = (info: ProductItem) => {
    router.push(`/marker-detail?${info.uid}`)
  }
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="w-full"
        onClick={() => {
          jumpDetail(info)
        }}>
        <div className="h-52 w-full bg-gray-400"></div>
        <div className="flex justify-center">
          <div>{info.name}</div>
          <div>{info.uid}</div>
          <div>{info.url}</div>
        </div>
      </div>
    </Suspense>
  )
}
