import WaterFall from '@/components/waterfall'
import { useStoreActions, useStoreState } from '@/store/index.hook'
import { ProductItem } from '@/types'
import { Block, Tabbar, TabbarLink } from 'konsta/react'
import { useState } from 'react'
import { NextPageWithLayout } from '../_app'

const MarkerIndex: NextPageWithLayout = () => {
  const user = useStoreState(state => state.user)
  const updateDevice = useStoreActions(action => action.device.updateDevice)
  const [activeTab, setActiveTab] = useState<'tab-1' | 'tab-2'>('tab-1')
  const waterMarkerList: ProductItem[] = [
    { url: '', name: 'marker1', uid: '12' },
    { url: '', name: 'marker2', uid: '13' },
    { url: '', name: 'marker3', uid: '14' },
  ]
  return (
    <div className="block h-screen w-screen">
      <div className="flex flex-row justify-between px-6 py-6">
        <div className="text-2xl font-semibold">你好，摄影师！</div>
        <div className="text-2xl font-semibold">设置</div>
      </div>
      <Tabbar labels>
        <TabbarLink
          active={activeTab === 'tab-1'}
          onClick={() => setActiveTab('tab-1')}
          label={'水印模板'}
        />
        <TabbarLink
          active={activeTab === 'tab-2'}
          onClick={() => setActiveTab('tab-2')}
          label={'水印模板'}
        />
      </Tabbar>
      {activeTab === 'tab-1' ? (
        <Block>
          <WaterFall type="list" list={waterMarkerList} />
        </Block>
      ) : null}
      {activeTab === 'tab-2' ? (
        <Block>
          <div>我的模板</div>
        </Block>
      ) : null}
    </div>
  )
}

export default MarkerIndex
