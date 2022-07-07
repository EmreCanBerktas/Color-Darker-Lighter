import Card from "./Card";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("#FFC0CB");
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Color: {color}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Card color={color} number={-40} />
        <Card color={color} number={-30} />
        <Card color={color} number={-20} />
        <Card color={color} number={-10} />
        <Card color={color} number={0} />
        <Card color={color} number={10} />
        <Card color={color} number={20} />
        <Card color={color} number={30} />
        <Card color={color} number={40} />
      </div>
      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          value={`${color}`}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        {/* <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        /> */}
      </div>
    </div>
  );
}

export default App;
