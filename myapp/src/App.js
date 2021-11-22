import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Posts from "./components/posts";
import Cards from './components/cards';
import Admin from './components/admin';
import Student from './components/student';
import StudentForm from './components/studentform';
import PageNotFound from './components/pageNotFound';
import {Switch,Route,Redirect} from 'react-router-dom';
import UpdateStudent from './components/updateStudent';
import Nav from './components/nav';
function App() {
  return (
   <div className="App">
     <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/cards/admin/student" component={Student}/>
        <Route  exact path="/cards/admin" component={Admin} />
        <Route exact path="/cards" component={Cards} />
        <Route path="/student" component={Student} />
        <Route path="/students/add" component={StudentForm} />
        <Route path="/students/update/:courseId" component={UpdateStudent}/>
        <Route exact path="/" component={Nav} />
        <Redirect from="/nav" to="/" />
        <Route component={PageNotFound} />
      </Switch>
      
    </div>
  
  );
}

export default App;
