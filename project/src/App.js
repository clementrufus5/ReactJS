
import './App.css';
import Nav from "./components/nav";
import "bootstrap/dist/css/bootstrap.css";
import PageNotFound from './components/pageNotFound';
import {Switch,Route,Redirect} from 'react-router-dom';
import HomeCards from './components/homeCards';
import AdminLogin from './components/adminLogin';
import StudentLogin from './components/studentLogin';
import STudentRegister from './components/studentRegister';
import StudentPage from './components/studentPage';
import StudentGetAllCourses from './components/studentGetAllCourses';
import StudentGetAllExams from './components/studentGetAllExams';
import AdminPage from './components/adminPage';
function App() {
  return (
   <div className="App">
      <Switch>
    
        <Route exact path="/studentPage/studentGetAllExams" component={StudentGetAllExams}/>
        <Route exact path="/studentPage/studentGetAllCourses" component={StudentGetAllCourses}/>
        <Route exact path="/studentPage" component={StudentPage}/>
        <Route exact path="/adminPage" component={AdminPage}/> 
        <Route exact path="/studentRegister" component={STudentRegister}/>
        <Route exact path="/studentLogin" component={StudentLogin}/>
        <Route exact path="/adminLogin" component={AdminLogin}/>
        <Route exact path="/" component={Nav} />

        <Route component={PageNotFound} />
      </Switch>
      
    </div>
  
  );
}

export default App;
