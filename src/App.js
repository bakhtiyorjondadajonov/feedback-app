import { useContext } from "react";
import {Routes,Route} from "react-router-dom"
import classes from './App.module.css';
import UserContextProvider, { UserContext } from "./context/userContext";

import CreateFeedBack from "./Routes/CreateFeedBack";
import EditFeedback from "./Routes/EditFeedback";
import FeedBackDetails from "./Routes/FeedBackDetails";
import Home from './Routes/Home';
import RoadmapPage from "./Routes/RoadmapPage";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
function App() {
  
  const {currentUser}=useContext(UserContext)
  return <div className={classes.container}>
<Routes>
  {
    !currentUser && <> <Route path='/' element={<SignIn/>}/>
   </>
  }
  <Route path='/sign-in' element={<SignIn/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
  {
    currentUser && <>
     <Route path="/" element={<Home/>}/>
  <Route path="/roadmap" element={<RoadmapPage/>}/>
  <Route path="/feedback-details/:id" element={<FeedBackDetails/>}/>
  <Route path="/new-feedback" element={<CreateFeedBack/>} />
  <Route path="/edit-feedback" element={<EditFeedback/>} />
    </>
  }
 
</Routes>
  </div>
}

export default App;
