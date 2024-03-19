import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "../Initialize/App";
import Home from "../Home/index";

function MyRoutes(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </Router>
    );
};

export default MyRoutes;