import { React, useEffect } from "react";
import MenuTop from "./Views/MenuTop";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./ViewCOmponents/Home";
import About from "./ViewCOmponents/About";
import Footer from "./ViewCOmponents/Footer";
import HomeLoan from "./ViewCOmponents/Banking/HomeLoan";
import PersonalLoan from "./ViewCOmponents/Banking/PersonalLoan";
import PropertyLoan from "./ViewCOmponents/Banking/PropertyLoan";
import EducationLoan from "./ViewCOmponents/Banking/EducationLoan";
import VehicleLoan from "./ViewCOmponents/Banking/VehicleLoan";
import Emitra from "./ViewCOmponents/Emitra/Emitra";
import Csc from "./ViewCOmponents/CSC/Csc";
import FastTag from "./ViewCOmponents/FastTag/FastTag";
import Rscit from "./ViewCOmponents/RKCL/Rscit";
import Certificates from "./ViewCOmponents/Education/Certificates";
import Diploma from "./ViewCOmponents/Education/Diploma";
import UgCourses from "./ViewCOmponents/Education/UgCourses";
import PgCourses from "./ViewCOmponents/Education/PgCourses";

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
              <Route path="/homeLoan" element={<HomeLoan />}></Route>
              <Route path="/personalLoan" element={<PersonalLoan />}></Route>
              <Route path="/propertyLoan" element={<PropertyLoan />}></Route>
              <Route path="/educationLoan" element={<EducationLoan />}></Route>
              <Route path="/vehicleLoan" element={<VehicleLoan />}></Route>
              <Route path="/emitra" element={<Emitra />}></Route>
              <Route path="/csc" element={<Csc />}></Route>
              <Route path="/fasttag" element={<FastTag />}></Route>
              <Route path="/rscit" element={<Rscit />}></Route>
              <Route path="/certificates" element={<Certificates />}></Route>
              <Route path="/diploma" element={<Diploma />}></Route>
              <Route path="/ugcourses" element={<UgCourses />}></Route>
              <Route path="/pgcourses" element={<PgCourses />}></Route>
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default DefaultLayout;
