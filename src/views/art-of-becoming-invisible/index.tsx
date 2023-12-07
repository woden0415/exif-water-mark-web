import { Block, BlockTitle, Button, List, ListItem, Navbar, NavbarBackLink, Page } from "konsta/react";
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
      </Block>
      <hr />
      <BlockTitle className="font-bold text-2xl">天地人神四盘</BlockTitle>
      <BlockTitle>天盘</BlockTitle>
      <Block>
        天盘是指天体运动对地球和 人的影响。这里所说的九大行星并非现代天文学观测到的实际星座，而是古人在天人感应观 中，凭经验和直感发现的与地球上九个方位和八卦有对应的九种天体运行能量的代称。
      </Block>
      <List strong outline inset>
        <ListItem title="1、天蓬星: 又名贪狼星，北坎一宫，五行属水。" />
        <ListItem title="2、天芮星: 又名巨门星，西南坤二宫，五行属土。" />
        <ListItem title="3、天冲星: 又名禄存星，东震三宫，五行属木。" />
        <ListItem title="4、天辅星 : 又名文曲星，东南巽四宫，五行属木。" />
        <ListItem title="5、天禽星: 又名廉贞星，中方五宫，五行属 土。" />
        <ListItem title="6、天心星: 又名武曲星，西北乾六宫，五行属金。" />
        <ListItem title="7、天柱星: 又名破军星，西兑七宫，五行属金。" />
        <ListItem title="8、天任星: 又名左辅星，东北艮八宫，五行属土。" />
        <ListItem title="9、天英星: 又名右弼星，南离九宫，五行属火。" />
      </List>

      <BlockTitle>地盘</BlockTitle>
      <Block>
        <div>
          六甲将帅和三个奇兵，根据不同季节、不同日子 、不同时辰，在九宫八卦阵上排演的规律，即为地盘排演规律。
          地盘五天一变(五天一阵式、 五天一元、五天一局)，共有阳遁九局、阴遁九局、十八种阵式。
          在五天一局中，地盘上的阵 式、格局是不变的，即地盘是不动的。
        </div>
        <div>
          后天八卦顺序: 坎坤震巽乾兑艮离
        </div>
      </Block>

      <BlockTitle>人盘</BlockTitle>
      <Block>
        <div>人盘又称门盘，根据空间不同方位对人体生理 及人类生产、生活、行军打仗等活动利弊影响的不同特点进行设置，共设八盘，与八卦、八 方相对应。 </div>
      </Block>
      <List strong outline inset>
        <ListItem title="1、休门: 北坎一宫，天蓬星对应，五行属水。" />
        <ListItem title="2、死门: 西南坤二 宫，天芮星(含天禽星)对应，五行属土。" />
        <ListItem title="3、伤门: 东震三宫，天冲星对应，五行属木 。" />
        <ListItem title="4、杜门: 东南巽四宫，天辅星对应，五行属木。" />
        <ListItem title="5、开门: 西北乾六宫，天 心星对应，五行属金。" />
        <ListItem title="6、惊门: 西兑七宫，天柱星对应，五行属金。" />
        <ListItem title="7、生门 : 东北艮八宫，天任星对应，五行属土。" />
        <ListItem title="8、景门: 南离九宫，天英星对应，五行属火 。" />
      </List>
      <Block>
        <div> 八门的运转规律是随时宫，即按阳遁顺行、阴遁逆行，随时辰地支和九宫顺序运转 ，也是一个时辰换一个宫位。 </div>
        <div> 值使：即八门中的值班门吏，宫位与值符相同。 </div>
        <div> 八门顺序：休生伤杜景死惊开(环状) </div>
      </Block>

      <BlockTitle>神盘</BlockTitle>
      <Block>
        <div>神盘又称顶盘， 在天、地、人相互感应中发现的八种影响人类生活吉凶祸福和举事成败得失的神秘力量，并命名为八种神煞</div>
      </Block>
      <List strong outline inset>
        <ListItem title="1、值符: 禀中央土，小值符，八神元首、九星领袖，所到之处、百 恶消散。" />
        <ListItem title="2、腾蛇: 禀南方火，虚诈之神，性柔口毒，专司惊恐怪异之事。" />
        <ListItem title="3、太阴: 禀西方阴金，荫诱之神，性阴匿暗昧。" />
        <ListItem title="4、六合: 禀东方木，护卫之神，性和平 ，专管婚姻交易中介之事。" />
        <ListItem title="5、白虎: 禀西方金，下隐勾陈，凶恶之神，性好杀，专司 兵戈争斗杀伐病死之事。" />
        <ListItem title="6、玄武: 禀北方水，下隐朱雀，奸盗之神，性好阴谋贼害， 专司盗贼逃亡口舌之事。" />
        <ListItem title="7、九地: 坤土之象、万物之母，坚牢之神，性柔好静。" />
        <ListItem title="8、九天: 乾金之象、万物之父，威悍之神，性刚好动。" />
      </List>
      <Block>
        <div> 八神的运转规律是，小值符 永远追随大值符。</div>
        <div> 八神顺序：符蛇阴合虎武地天(环状)</div>
      </Block>
    </Page>
  )
}