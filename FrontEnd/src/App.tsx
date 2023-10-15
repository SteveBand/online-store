import { useEffect } from "react";
import "./App.css";
import { LoginPage } from "./pages/auth-pages/login-page/LoginPage";
import { SignupPage } from "./pages/auth-pages/signup-page/SignupPage";
import { useAppDispatch } from "./store/store";
import { keepUser } from "./store/user/userSlice";
import { Route, Routes } from "react-router";
import { Dashboard } from "./pages/landing-page/dashboard/Dashboard";
import { LandingPage } from "./pages/landing-page/LandingPage";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (token?.length) {
      dispatch(keepUser(token));
    }
  }, []);
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/" />
      </Routes>
    </>
  );
}

export default App;
