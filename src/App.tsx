import { useState } from 'react'
import { useStoreState } from "./store/index.hook"
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
} from 'konsta/react';
import { useNavigate } from "react-router";
// import { useRouter } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)
  const email = useStoreState(state => state.user.info.email)
  
  const navigate = useNavigate()
  return (
    <Page>
      <Navbar
        title="Buttons"
      />
      <List strongIos outlineIos>
        <ListItem title="水印" link onClick={ () => {navigate('/water-marker',{ state: { key: "value" } }) } }> </ListItem>
        <ListItem title="奇门遁甲" link onClick={ () => {navigate('/art-of-becoming-invisible') } }> </ListItem>
      </List>
    </Page>
  )
}

export default App
