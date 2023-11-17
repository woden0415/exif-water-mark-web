import { List, ListItem, Navbar, Page } from 'konsta/react'

export default function Home() {
  return (
    <Page>
      <Navbar title="exif水印" />
      <List>
        <ListItem href="/splash/" title="闪屏页面" />
        <ListItem href="/marker-index/" title="水印主页" />
        <ListItem href="/marker-list/" title="水印列表" />
        <ListItem href="/marker-detail/" title="水印详情" />
        <ListItem href="/compile/" title="合成页面" />
        <ListItem href="/personal-center/" title="个人中心" />
        <ListItem href="/setting/" title="设置" />
      </List>
    </Page>
  )
}
