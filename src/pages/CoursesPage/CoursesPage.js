import React, { useEffect, useState } from "react";
import { coursesUrl } from "../../constants/urls";

const CoursesPage = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    fetch(coursesUrl)
      .then((response) => response.json())
      .then((data) => {
        setCoursesData(data);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Title</th>
            <th>Department Name</th>
            <th>Credits</th>
          </tr>
        </thead>

        <tbody>
          {coursesData.map((item) => (
            <tr key={item.ID}>
              <td>{item.course_id}</td>
              <td>{item.title}</td>
              <td>{item.dept_name}</td>
              <td>{item.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPage;
