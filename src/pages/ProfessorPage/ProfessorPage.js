import React, { useEffect, useState } from "react";

const ProfessorPage = () => {
  const [count, setCount] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/") // api for the get request
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>ProfessorPage</div>;
};

export default ProfessorPage;
