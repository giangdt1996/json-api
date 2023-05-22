import React, { useState, useEffect } from "react";

function DemoFetchAPI() {
  //Get Fetch API
  // Khi su dung fetch => promise (trangj thái đầu tiên luônn là pending)pending
  // => nếu trả về dữ liệu về phần phần.then
  // => nếu trả về lỗi sẽ trả về phần phần .catch

  //Tao state de luu tru data
  const [dataUser, setDataUser] = useState([]);
  //   const handleGetFetch = () => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) // Ép lại kiểu dữ liệu được trả về từ api
  //       .then((data) => setDataUser(data))
  //       .catch((err) => console.log(err));
  //   };

  //Cach 2: su dung useEffect
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json()) // Ép lại kiểu dữ liệu được trả về từ api
      .then((data) => setDataUser(data))
      .catch((err) => console.log(err));
  }, []);

  //Post Fetch API
  const people = {
    username: "Huy",
    email: "huy@gmail.com",
    age: 24,
    phone: "0324851353",
  };
  const handlePostFetch = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(people),
    });
  };
  // Put Fetch API
  // Khi sd put patch delete se can biet id cua user => url/{id}
  // so sanh giua PUT vag PATCH
  // PUT se tao ra 1 ban ghi moi ghi de lai ban ghi cu

  const putFetch = {
    username: "Long",
    email: "long@gmail.com",
    age: 30,
    phone: "0324851353",
  };
  const handlePutFetch = () => {
    fetch("http://localhost:8000/users/3", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putFetch),
    });
  };

  // Patch Fetch API
  // Patch giu nguyen gia tri ban dau chi sua truong duoc gui len tu body
  const patchFetch = {
    username: "Cuong",
    email: "Cuong@gmail.com",
    age: 30,
    phone: "0324851353",
  };
  const handlePatchFetch = () => {
    fetch("http://localhost:8000/users/3", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchFetch),
    });
  };
  // Delete Fetch API
  const handleDeleteFetch = () => {
    fetch("http://localhost:8000/users/3", {
      method: "DELETE",
    });
  };

  return (
    <div>
      <h2>DemoFetchAPI</h2>
      {/**Cach 1 Phan Get*/}
      {/* <button onClick={handleGetFetch}>Get Fetch API</button> */}
      {/**Cach 2 Phan Get*/}
      <button>Get Fetch API</button>
      <button onClick={handlePostFetch}>Post Fetch API</button>
      <button onClick={handlePutFetch}>Put Fetch API</button>
      <button onClick={handlePatchFetch}>Patch Fetch API</button>
      <button onClick={handleDeleteFetch}>Delete Fetch API</button>
      {/* hien thi dnah sach user */}
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((e, i) => (
            <tr key={i}>
              <th>{e.id}</th>
              <th>{e.username}</th>
              <th>{e.email}</th>
              <th>{e.age}</th>
              <th>{e.phone}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchAPI;
