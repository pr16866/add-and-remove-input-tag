import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [arr, setArr] = useState([]);
  const handleClick = () => {
    let obj = { name: "" };
    setArr([...arr, obj]);
  };
  const remove = (index) => {
    let val = arr.splice(index, 1);
    setArr([...arr]);
    // setArr();
    console.log(val);
  };
  const handleChange = (e, index) => {
    console.log(e.target.value);
    arr[index].name = e.target.value;
    setArr([...arr]);
  };
  console.log(arr);
  return (
    <div className="App">
      <label htmlFor="name">
        Name:- <input type="text" className="" placeholder="Name" />
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          margin: "10px",
        }}
      >
        {arr.map((item, index) => {
          return (
            <>
              <div style={{ display: "flex", gap: "4px" }} key={index}>
                <label htmlFor="name">
                  Name:-{" "}
                  <input
                    type="text"
                    className=""
                    placeholder="Name"
                    onChange={(e) => handleChange(e, index)}
                    value={item.name}
                  />
                </label>
                <button onClick={() => remove(index)}>remove</button>
              </div>
            </>
          );
        })}
      </div>
      <button
        style={{
          display: "block",
          textAlign: "center",
          margin: "auto",
          marginTop: "20px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Add another field
      </button>
    </div>
  );
}

export default App;
