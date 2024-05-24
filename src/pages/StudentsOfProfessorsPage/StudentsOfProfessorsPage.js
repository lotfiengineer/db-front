import React, { useEffect, useState } from "react";
import { professorsUrl, studentsOfProfessorsUrl } from "../../constants/urls";

const StudentsOfProfessorsPage = () => {
  const [studentsOfProfessorList, setStudentsOfProfessorList] = useState([]);

  const [professorsList, setProfessorsList] = useState([]);
  const [selectedProfessorId, setSelectedProfessorId] = useState(-1);

  useEffect(() => {
    fetch(professorsUrl)
      .then((response) => response.json())
      .then((data) => {
        setProfessorsList(data);

        setSelectedProfessorId(data[0]?.ID);
      });
  }, []);

  useEffect(() => {
    getStudentsOfProfessor(selectedProfessorId);
  }, [selectedProfessorId]);

  const getStudentsOfProfessor = (professorId) => {
    setStudentsOfProfessorList([]);

    fetch(studentsOfProfessorsUrl + "/" + professorId)
      .then((response) => response.json())
      .then((data) => {
        setStudentsOfProfessorList(data);
      });
  };

  const showProfessorsList = () => {
    return (
      <select
        name="professorsList"
        id="professorsList"
        value={selectedProfessorId}
        onChange={(e) => {
          setSelectedProfessorId(e.target.value);
        }}
      >
        {professorsList.map((item) => (
          <option key={item.ID} value={item.ID}>
            {item.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div>
      <label htmlFor="professorsList">Select a Professor: </label>
      {showProfessorsList()}
      <br />
      <br />
      <br />

      <h3>Students of Professors</h3>

      <br />

      {studentsOfProfessorList.length === 0 ? (
        <div>No Data For The Selected Professor</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Professor Id</th>
              <th>Professor Name</th>
              <th>Student Id</th>
              <th>Student name</th>
              <th>Course title</th>
            </tr>
          </thead>

          <tbody>
            {studentsOfProfessorList.map((item, i) => (
              <tr key={i}>
                <td>{item.instructorId}</td>
                <td>{item.instructorName}</td>
                <td>{item.studentId}</td>
                <td>{item.studentName}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />
    </div>
  );
};

export default StudentsOfProfessorsPage;
