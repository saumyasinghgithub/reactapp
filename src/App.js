import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CustomRoutes from "./CustomRoutes";

const App = (props) => {
  const RoutedLayout = (props) => {
    return <Router>
      <Routes>
        {CustomRoutes.map((route,index)=>{

        })}
      </Routes>
    </Router>
  }
  const Provider = (props) =>{
    return <UserProvider>
      <RoutedLayout />
    </UserProvider>
  }
  return <Provider />
}

export default App;
