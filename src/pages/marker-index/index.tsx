import { useStoreActions, useStoreState } from '@/store/index.hook'
import { Button } from 'konsta/react'
import { NextPageWithLayout } from '../_app'

const MarkerIndex: NextPageWithLayout = () => {
  const user = useStoreState(state => state.user)
  const updateDevice = useStoreActions(action => action.device.updateDevice)
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center">首页</div>
      <div>{user.info.name}</div>
      <Button
        onClick={() => {
          updateDevice({ theme: 'ios' })
        }}>
        更新主题ios
      </Button>
      <Button
        onClick={() => {
          updateDevice({ theme: 'material' })
        }}>
        更新主题material
      </Button>
    </div>
  )
}

export default MarkerIndex
