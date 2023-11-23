// const WaterFall = () => {
//   return <div>瀑布流</div>
// }

import { randomId } from '@/utils'
import ProductItem from '../product-item'

export default function WaterFall({
  type = 'list',
  list,
}: {
  type: 'list' | 'column'
  list: Array<any>
}) {
  return (
    <ul>
      {list.map(v => {
        const _v = { ...v, _id: randomId() }
        return <ProductItem key={_v._id} info={v} />
      })}
    </ul>
  )
}
