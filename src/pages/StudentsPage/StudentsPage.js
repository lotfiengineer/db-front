import React, { useEffect, useState } from "react";
import { studentsUrl, departmentsUrl } from "../../constants/urls";
import "./StudentsPage.css";
import headers from "../../constants/headers";

const StudentsPage = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [departmentsData, setDepartments] = useState([]);
  const [newStudent, setNewStudent] = useState({
    studentId: "",
    studentName: "",
    departmentName: "",
    totalCredit: -1,
  });

  const getStudents = () => {
    fetch(studentsUrl)
      .then((response) => response.json())
      .then((data) => {
        setStudentsData(data);
      });
  };

  const getDepartments = () => {
    fetch(departmentsUrl)
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data);

        setNewStudent({
          ...newStudent,
          departmentName: data[0]?.dept_name,
        });
      });
  };

  useEffect(() => {
    getStudents();

    getDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      newStudent.studentId === "" ||
      newStudent.studentName === "" ||
      newStudent.departmentName === "" ||
      newStudent.totalCredit < 0
    ) {
      return;
    }

    fetch(studentsUrl, {
      method: "POST",
      body: JSON.stringify(newStudent),
    }).then((res) => {
      getStudents();

      console.log("it is working - added");
    });
  };

  const handleDelete = async (id) => {
    fetch(studentsUrl + "/" + id, {
      method: "DELETE", // Method itself
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    });

    setTimeout(() => {
      getStudents();

      console.log("it is working - deleted");
    }, 300);
  };

  const showDepartment = () => {
    return (
      <select
        name="departmentName"
        id="departmentName"
        value={newStudent.departmentName}
        onChange={(e) => {
          setNewStudent({
            ...newStudent,
            departmentName: e.target.value,
          });
        }}
      >
        {departmentsData.map((item) => (
          <option key={item.dept_name} value={item.dept_name}>
            {item.dept_name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="students_page">
      <h2>Add a new student</h2>
      <br />

      <div className="insert_student">
        <form action="/action_page.php" onSubmit={handleSubmit}>
          <label htmlFor="studentId">Student ID: </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            onChange={(e) => {
              setNewStudent({
                ...newStudent,
                studentId: e.target.value,
              });
            }}
          />
          <br />
          <br />
          <label htmlFor="studentName">Student name: </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            onChange={(e) => {
              setNewStudent({
                ...newStudent,
                studentName: e.target.value,
              });
            }}
          />
          <br />
          <br />
          <label htmlFor="departmentName">DepartmentName: </label>
          {showDepartment()}
          <br />
          <br />
          <label htmlFor="totalCredit">Total credit: </label>
          <input
            type="number"
            inputMode="numeric"
            id="totalCredit"
            name="totalCredit"
            onChange={(e) => {
              setNewStudent({
                ...newStudent,
                totalCredit: parseInt(e.target.value),
              });
            }}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>

      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Department Name</th>
            <th>Total Credit</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {studentsData.map((item) => (
            <tr key={item.ID}>
              <td>{item.ID}</td>
              <td>{item.name}</td>
              <td>{item.dept_name}</td>
              <td>{item.tot_cred}</td>
              <td
                style={{
                  textAlign: "center",
                }}
              >
                <button
                  onClick={() => {
                    handleDelete(item.ID);
                  }}
                  style={{
                    background: "#D22600",
                    color: "white",
                    border: "none",
                    padding: "7px 10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;
