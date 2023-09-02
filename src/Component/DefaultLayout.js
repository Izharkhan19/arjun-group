import { React, useEffect } from "react";
import MenuTop from "./Views/MenuTop";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./ViewCOmponents/Home";
import About from "./ViewCOmponents/About";
import Footer from "./ViewCOmponents/Footer";

const DefaultLayout = () => {
  let navigate = useNavigate();

  let isLogged = localStorage.getItem("IsLoggedIn");

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, []);
  
  return (
    <>
      {isLogged && (
        <>
          <MenuTop />
          <div className="main-content">
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              {/* <Route path="/individual" element={<Individuals />}></Route>
          <Route path="/business" element={<Business />}></Route>
          <Route path="/univercities" element={<Univercities />}></Route>
          <Route path="/governments" element={<Governments />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="/support" element={<SupportPAge />}></Route> */}
            </Routes>
          </div>
      <Footer />

        </>
      )}
    </>
  );
};

export default DefaultLayout;
