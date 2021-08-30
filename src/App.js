import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import Menu from "./Menu"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NewOne from "./NewOne";
import EditOne from "./EditOne";

const App=()=>{
  return(
    <>
      <Menu/>
      <Switch>
        <Route path="/" exact component={()=><Home/>} />
        <Route path="/new" exact component={()=><NewOne/>} />
        <Route path="/edit/:id" exact component={()=><EditOne/>} />
        {/* <Route path="/delete" exact component={} /> */}
      </Switch>
    </>
  )
}

export default App;