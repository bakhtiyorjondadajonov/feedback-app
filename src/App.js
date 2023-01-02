
import classes from './App.module.css';
import MainParts from './components/main-parts/MainParts';
import SideBar from './components/side-bar/SideBar';

function App() {
  return <div className={classes.container}>
<SideBar/>
<MainParts/>
  </div>
}

export default App;
