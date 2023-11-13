import { App as KonastaApp } from 'konsta/react'
import { PropsWithChildren, useState } from 'react'

export default function Layout({ children }: PropsWithChildren<{}>) {
  const [theme, setTheme] = useState<'ios' | 'material' | 'parent' | undefined>(
    'ios'
  )
  return (
    <KonastaApp theme={theme}>
      <div className="flex flex-col">{children}</div>
    </KonastaApp>
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
