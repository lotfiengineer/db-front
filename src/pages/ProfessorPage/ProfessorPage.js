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
              <td>{item.ID}</td>
              <td>{item.name}</td>
              <td>{item.dept_name}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorPage;
