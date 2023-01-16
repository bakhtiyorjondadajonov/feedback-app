import {Routes,Route} from "react-router-dom"
import classes from './App.module.css';

import CreateFeedBack from "./Routes/CreateFeedBack";
import EditFeedback from "./Routes/EditFeedback";
import Home from './Routes/Home';
import SignIn from "./Routes/SignIn";
function App() {
  return <div className={classes.container}>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/new-feedback" element={<CreateFeedBack/>} />
  <Route path="/edit-feedback" element={<EditFeedback/>} />
  <Route path='/sign-in' element={<SignIn/>}/>
</Routes>
  </div>
}

export default App;
