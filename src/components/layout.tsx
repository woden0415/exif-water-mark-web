import { useStoreState } from '@/store/index.hook'
import store from '@/store/index.store'
import { StoreProvider } from 'easy-peasy'
import { App as KonastaApp } from 'konsta/react'
import { PropsWithChildren } from 'react'

function KonastaContainer({ children }: PropsWithChildren<{}>) {
  const theme = useStoreState(state => state.device.info.theme)
  return (
    <KonastaApp theme={theme}>
      <div className="flex h-full flex-col">{children}</div>
    </KonastaApp>
  )
}
export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <StoreProvider store={store}>
      <KonastaContainer>{children}</KonastaContainer>
    </StoreProvider>
  )
}

// 自定义的layout
export function NestedLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Layout>
      <div>
        自定义的layout
        {children}
      </div>
    </Layout>
  )
}
