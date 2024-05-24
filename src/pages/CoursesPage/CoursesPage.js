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
              <th>{item.course_id}</th>
              <th>{item.title}</th>
              <th>{item.dept_name}</th>
              <th>{item.credits}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPage;
