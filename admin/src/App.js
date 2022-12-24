import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import "./app.css";
import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
      <div>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
