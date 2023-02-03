import { useContext } from "react";
import {Routes,Route} from "react-router-dom"
import classes from './App.module.css';
import { UserContext } from "./context/userContext";

import CreateFeedBack from "./Routes/CreateFeedBack";
import EditFeedback from "./Routes/EditFeedback";
import FeedBackDetails from "./Routes/FeedBackDetails";
import Home from './Routes/Home';
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
function App() {
  const {currentUser}=useContext(UserContext)
  return <div className={classes.container}>
<Routes>
  <Route path='/sign-in' element={<SignIn/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/feedback-details/:id" element={<FeedBackDetails/>}/>
  <Route path="/new-feedback" element={<CreateFeedBack/>} />
  <Route path="/edit-feedback" element={<EditFeedback/>} />
</Routes>
  </div>
}

export default App;
