import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import StudentsPage from "./pages/StudentsPage/StudentsPage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import ProfessorPage from "./pages/ProfessorPage/ProfessorPage";
import HomePage from "./pages/HomePage/HomePage";
import CustomAppBar from "./common/CustomAppBar/CustomAppBar";

function App() {
  return (
    <BrowserRouter>
      <CustomAppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="professors" element={<ProfessorPage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="courses" element={<CoursesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
