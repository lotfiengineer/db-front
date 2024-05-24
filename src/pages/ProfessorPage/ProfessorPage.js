import React, { useEffect, useState } from "react";
import { professorsUrl } from "../../constants/urls";

const ProfessorPage = () => {
  const [professorsData, setProfessorsData] = useState([]);

  useEffect(() => {
    fetch(professorsUrl)
      .then((response) => response.json())
      .then((data) => {
        setProfessorsData(data);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Professor ID</th>
            <th>Professor Name</th>
            <th>Department Name</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {professorsData.map((item) => (
            <tr key={item.ID}>
              <th>{item.ID}</th>
              <th>{item.name}</th>
              <th>{item.dept_name}</th>
              <th>{item.salary}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorPage;
