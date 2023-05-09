import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CustomRoutes from "./CustomRoutes";

const App = (props) => {
  const RoutedLayout = (props) => {
    return <Router>
      <Routes>
        {CustomRoutes.map((route,index)=>{
          return <Route
            key={index}
            path={process.env.PUBLIC_URL + route.path}
            exact={route.exact || false}
            element={
              <route.layout {...props}>
                <route.component {...props} />
              </route.layout>
            }
          />
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
