import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";

//import the global style file
import './style/dark.scss'

//import the context API
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, userColumns } from "./dataTableSource";
 
function App() {

  const { darkMode }= useContext(DarkModeContext)

  // create a protected route to wrap other routes with it and check if user is admin 
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    
    if (!user) {
      return <Navigate to='/login' />
    }
    return children
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />

            <Route index element={
              <ProtectedRoute>
                 <Home />
              </ProtectedRoute>
              }
            />

            <Route path="users">
              <Route index element={
                <ProtectedRoute>
                  <List columns={ userColumns } />
                </ProtectedRoute>
                }
              />

              <Route path=":userId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
                }
              />

              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                  }
               />
            </Route>

            <Route path="hotels">
              <Route index element={
                <ProtectedRoute>
                  <List columns={ hotelColumns }/>
                </ProtectedRoute>
                  }
                />

              <Route path=":productId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
                  }
               />

              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={productInputs} title="Add New Product" />
                  </ProtectedRoute>
                  }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
