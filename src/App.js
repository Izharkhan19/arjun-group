import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Component/DefaultLayout";
import AuthLogin from "./Component/AuthPages/AuthLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLogin />}></Route>
          <Route path="/login" element={<AuthLogin />}></Route>
          <Route path="/*" element={<DefaultLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
