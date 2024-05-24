import React, { useEffect, useState } from "react";
import { studentsUrl } from "../../constants/urls";

const StudentsPage = () => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    fetch(studentsUrl)
      .then((response) => response.json())
      .then((data) => {
        setStudentsData(data);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Department Name</th>
            <th>Total Credit</th>
          </tr>
        </thead>

        <tbody>
          {studentsData.map((item) => (
            <tr key={item.ID}>
              <th>{item.ID}</th>
              <th>{item.name}</th>
              <th>{item.dept_name}</th>
              <th>{item.tot_cred}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;
