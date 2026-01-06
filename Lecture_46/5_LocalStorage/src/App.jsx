import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [obj, setObj] = useState({ id: 1, age: 20 });

  function saveData() {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("obj", JSON.stringify(obj));
    alert("Data saved!");
  }

  function deleteName() {
    localStorage.removeItem("name");
    alert("Name deleted!");
  }


  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);

    const savedEmail = localStorage.getItem("email");
    if (savedEmail) setEmail(savedEmail);

    const savedObj = localStorage.getItem("obj");
    if (savedObj) setObj(JSON.parse(savedObj));
  }, []);


  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button onClick={saveData}>Save data</button>
      <button onClick={deleteName}>Delete name</button>
    </>
  );
}

// Local Storage is a browser feature that allows you to store data persistently in the user’s browser as 
// key–value pairs. The stored data does not expire unless manually cleared, remains available even after 
// a page refresh or browser restart, stores only strings (objects must be converted to JSON), and can be
// accessed only by the same origin (same domain, protocol, and port) that created it.
