import { Block, BlockTitle, Button, Navbar, NavbarBackLink, Page } from "konsta/react";
import { PropsWithChildren } from "react";
import BoxItem from "./component/box-item";

export default function ArtOfBecomingInvisible({ children }: PropsWithChildren) { 
  
  return (
    <Page>
      <Navbar
        title="奇门遁甲"
        subtitle="图形"
        left={<NavbarBackLink text="Back" onClick={() => history.back()} />}
        right={<Button onClick={() => { alert('查看介绍')}}>介绍</Button>}
      />
      <BlockTitle>奇门遁甲八卦图</BlockTitle>
      <Block>
        <div className="grid grid-cols-3">
          <div className="border-slate-950 border-t border-l"><BoxItem index={0}/></div>
          <div className="border-slate-950 border-t border-l"><BoxItem index={1}/></div>
          <div className="border-slate-950 border-t border-l border-r"><BoxItem index={2}/></div>
          <div className="border-slate-950 border-t border-l"><BoxItem index={3}/></div>
          <div className="border-slate-950 border-t border-l"><BoxItem index={4}/></div>
          <div className="border-slate-950 border-t border-l border-r"><BoxItem index={5}/></div>
          <div className="border-slate-950 border-t border-l border-b"><BoxItem index={6}/></div>
          <div className="border-slate-950 border-t border-l border-b"><BoxItem index={7}/></div>
          <div className="border-slate-950 border-t border-l border-r border-b"><BoxItem index={8}/></div>
        </div>
        <br />
        {/* <table className="border border-black w-full">
          <tr>
            <td className="border border-black">1</td>
            <td className="border border-black">2</td>
            <td className="border border-black">3</td>
          </tr>
          <tr>
            <td className="border border-black">4</td>
            <td className="border border-black">5</td>
            <td className="border border-black">6</td>
          </tr>
          <tr>
            <td className="border border-black">7</td>
            <td className="border border-black">8</td>
            <td className="border border-black">9</td>
          </tr>
        </table> */}
      </Block>
    </Page>
  )
}