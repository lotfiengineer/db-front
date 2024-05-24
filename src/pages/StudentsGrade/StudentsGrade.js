import React, { useEffect, useState } from "react";
import { studentsGradeUrl, studentsUrl } from "../../constants/urls";

const StudentsGrade = () => {
  const [studentsGradeList, setStudentsGradeList] = useState([]);

  const [studentsList, setStudentsList] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(-1);

  useEffect(() => {
    fetch(studentsUrl)
      .then((response) => response.json())
      .then((data) => {
        setStudentsList(data);

        setSelectedStudentId(data[0]?.ID);
      });
  }, []);

  useEffect(() => {
    getStudentGrade(selectedStudentId);
  }, [selectedStudentId]);

  const getStudentGrade = (studentId) => {
    setStudentsGradeList([]);

    fetch(studentsGradeUrl + "/" + studentId)
      .then((response) => response.json())
      .then((data) => {
        setStudentsGradeList(data);
      });
  };

  const showStudentsList = () => {
    return (
      <select
        name="studentsList"
        id="studentsList"
        value={selectedStudentId}
        onChange={(e) => {
          setSelectedStudentId(e.target.value);
        }}
      >
        {studentsList.map((item) => (
          <option key={item.ID} value={item.ID}>
            {item.name}
          </option>
        ))}
      </select>
    );
  };

  console.log(selectedStudentId);

  return (
    <div>
      <label htmlFor="studentsList">Select a student: </label>
      {showStudentsList()}
      <br />
      <br />
      <br />

      <h3>Student grade</h3>

      <br />

      {studentsGradeList.length === 0 ? (
        <div>No Data For The Selected Student</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Semester</th>
              <th>Year</th>
              <th>Course ID</th>
              <th>Course Title</th>
              <th>Total Credit</th>
              <th>Student Grade</th>
            </tr>
          </thead>

          <tbody>
            {studentsGradeList.map((item) => (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.name}</td>
                <td>{item.semester}</td>
                <td>{item.year}</td>
                <td>{item.course_id}</td>
                <td>{item.title}</td>
                <td>{item.tot_cred}</td>
                <td>{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentsGrade;
