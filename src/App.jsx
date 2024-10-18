import Navbar from "./Components/Navbar";
import Home from "./Hime";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Structure from "./Components/Structure";
import Background from "./Components/Background";
import Vision from "./Components/Vision";
import Management from "./Components/management";
import Icttable from "./Components/Icttable";
import Footer from "./Components/footer";
import Accountting from "./Components/Accountting";
import TeacherICT from "./Components/Teachers/TeacherICT";
import TeacherAcc from "./Components/Teachers/TeacherAcc";
import TeacherMachanic from "./Components/Teachers/TeacherMachanic";
import TeacherElect from "./Components/Electric";
import TeacherCivil from "./Components/Teachers/TeacherCivil";
import TeacherAgre from "./Components/Teachers/TeacherAgre";
import TeacherForeing from "./Components/Teachers/TeacherForeing";
import TeacherFoundation from "./Components/Teachers/TeacherFoundation";
import TeacherAdmin from "./Components/Teachers/TeacherAdmin";
import TeacherFinance from "./Components/Teachers/TeacherFinance";
import TeacherTV from "./Components/Teachers/TeacherTV";
import TeacherTH from "./Components/Teachers/TeacherTH";
import TeacherIQA from "./Components/Teachers/TeacherIQA";
import TeacherPML from "./Components/Teachers/TeacherPML";
import TeacherLIC from "./Components/Teachers/TeacherLIC";
import TeacherCD from "./Components/Teachers/TeacherCD";
import fullLOGO from "./assets/full_logo.png";
import Elibrary from "./Components/Elibrary";
import UploadEbook from "./Components/uploadEbook";
import Result from "./Components/Result";
import TeacherTC from "./Components/Teachers/TeacherTC";
function App() {
  return (
    <div>
      <BrowserRouter>
        <center>
          <img src={fullLOGO} width="80%" className="md:block hidden" />
        </center>
        <Navbar />
        <br />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/background" element={<Background />} />
          <Route path="/vision-mission-gaol" element={<Vision />} />
          <Route path="/management" element={<Management />} />
          <Route path="/information-technology" element={<Icttable />} />
          <Route path="/accountting" element={<Accountting />} />
          <Route path="/ict-teachers" element={<TeacherICT />} />
          <Route path="/account-teachers" element={<TeacherAcc />} />
          <Route path="/mechanic-teachers" element={<TeacherMachanic />} />
          <Route path="/agriculture-teachers" element={<TeacherAgre />} />
          <Route path="/foundation-teachers" element={<TeacherFoundation />} />
          <Route path="/finance-teachers" element={<TeacherFinance />} />
          <Route path="/e-library" element={<Elibrary />} />
          <Route path="/book-upload" element={<UploadEbook />} />
          <Route path="/result" element={<Result />} />
          <Route
            path="/community-development-teachers"
            element={<TeacherCD />}
          />
          <Route
            path="/laision-international-coperation-teachers"
            element={<TeacherLIC />}
          />

          <Route
            path="/planning-maketing-laision-teachers"
            element={<TeacherPML />}
          />
          <Route
            path="/internal-quality-assurence-teachers"
            element={<TeacherIQA />}
          />
          <Route
            path="/technical-home-economic-teachers"
            element={<TeacherTH />}
          />
          <Route
            path="/technical-certificate-teachers"
            element={<TeacherTC />}
          />
          <Route
            path="/technical-vocational-education-teachers"
            element={<TeacherTV />}
          />
          <Route
            path="/administrative-staff-teachers"
            element={<TeacherAdmin />}
          />
          <Route
            path="/foreing-language-teachers"
            element={<TeacherForeing />}
          />
          <Route
            path="/civil-construction-teachers"
            element={<TeacherCivil />}
          />
          <Route
            path="/electricity-electronic-teachers"
            element={<TeacherElect />}
          />
        </Routes>
        <br />
        <br />
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
