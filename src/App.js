import "./App.css";
import Sidebar from "./Components/sidebar";
import MainRoutes from "./Components/mainRoutes";
import Login from "./Components/login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="flex">
          <Sidebar />
          <MainRoutes />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
