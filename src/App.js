import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
     <Switch>
     <Route path="/rooms/" component={Rooms} exact />
      <Route path="/rooms/:id" component={SingleRoom} exact />
      <Route path="/" component={Home} exact />
      <Route component={Error}  />
    
     </Switch>
    </>
  );
}

export default App;
