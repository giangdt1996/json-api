import React from "react";
import axios from "axios";

function DemoAxios() {
  // Axios la 1 thu vien cua js => duoc dung de xu ly api tuong duong nhu fetch
  // De sd: npm install axios

  //Get Axios
  const handleGetAxios = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => console.log(res.data));
  };

  //Post Axios
  const handlePostAxios = () => {
    axios.post("http://localhost:8000/users", {
      username: "Nhunggg",
      email: "nhung@gmail.com",
      age: 24,
      phone: "0324851352",
    });
  };

  // Put Axios
  const handlePutAxios = () => {
    axios
      .put("http://localhost:8000/users/3", {
        username: "Hoang Anh",
        email: "hoanganh@gmail.com",
        age: 21,
        phone: "0324851352",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Patch Axios

  const handlePatchAxios = () => {
    axios
      .patch("http://localhost:8000/users/3", {
        username: "Hai",
        email: "hai.email@gmail.com",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>DemoAxios</h2>
      <button onClick={handleGetAxios}>Get Axios</button>
      <button onClick={handlePostAxios}>Post Axios</button>
      <button onClick={handlePutAxios}>Put Axios</button>
      <button onClick={handlePatchAxios}>Patch Axios</button>
    </div>
  );
}

export default DemoAxios;
