import { useState } from 'react'
import { useStoreState } from "./store/index.hook"
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
} from 'konsta/react';
import { Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)
  const email = useStoreState(state => state.user.info.email)
  
  return (
    <Page>
      <Navbar
        title="Buttons"
      />
      <List strongIos outlineIos>
        <Link to="/water-marker" >
          <ListItem title="水印" link />
        </Link>
        <Link to="/art-of-becoming-invisible" >
          <ListItem title="奇门遁甲" link />
        </Link>
      </List>
    </Page>
  )
}

export default App
