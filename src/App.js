import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import StudentsPage from "./pages/StudentsPage/StudentsPage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import ProfessorPage from "./pages/ProfessorPage/ProfessorPage";
import HomePage from "./pages/HomePage/HomePage";
import CustomAppBar from "./common/CustomAppBar/CustomAppBar";
import StudentsGrade from "./pages/StudentsGrade/StudentsGrade";
import StudentsOfProfessorsPage from "./pages/StudentsOfProfessorsPage/StudentsOfProfessorsPage";

function App() {
  return (
    <BrowserRouter>
      <CustomAppBar />

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="professors" element={<ProfessorPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route
            path="students-of-professors"
            element={<StudentsOfProfessorsPage />}
          />
          <Route path="students-grade" element={<StudentsGrade />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
