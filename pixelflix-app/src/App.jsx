import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useAuth } from "./context/AuthContext";
import { VideoProvider } from "./context/VideosContext";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  const { currentUser } = useAuth();

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <ProfileProvider>
      <VideoProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </VideoProvider>
    </ProfileProvider>
  );
}

export default App;
