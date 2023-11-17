import { useStoreActions, useStoreState } from '@/store/index.hook'
import { NextPageWithLayout } from '../_app'

const MarkerIndex: NextPageWithLayout = () => {
  const user = useStoreState(state => state.user)
  const updateDevice = useStoreActions(action => action.device.updateDevice)
  return (
    <div className="block h-screen w-screen">
      <div className="flex flex-row justify-between px-10 py-6">
        <div className="text-2xl font-semibold">你好，摄影师！</div>
        <div className="text-2xl font-semibold">设置</div>
      </div>
      {/* <div>{user.info.name}</div>
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
      </Button> */}
    </div>
  )
}

export default MarkerIndex
