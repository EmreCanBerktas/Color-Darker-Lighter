import { Heading, Box } from "@chakra-ui/react";
import Card from "./Card";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("#FFC0CB");
  return (
    <div>
      <Heading>Color Shader</Heading>
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
          justifyContent: "space-between",
          width: "500px",
          marginLeft: "35%",
        }}
      >
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %0
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %10
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %20
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %30
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %40
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %50
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %60
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %70
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %80
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %90
        </Box>
        <Box bg="#e6e6e6" borderRadius="5px" fontSize="1.25rem">
          %100
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
        }}
      >
        <Card color={color} number={-100} />
        <Card color={color} number={-90} />
        <Card color={color} number={-80} />
        <Card color={color} number={-70} />
        <Card color={color} number={-60} />
        <Card color={color} number={-50} />
        <Card color={color} number={-40} />
        <Card color={color} number={-30} />
        <Card color={color} number={-20} />
        <Card color={color} number={-10} />
        <Card color={color} number={0} />
      </div>
      <br></br>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Card color={color} number={0} />
        <Card color={color} number={10} />
        <Card color={color} number={20} />
        <Card color={color} number={30} />
        <Card color={color} number={40} />
        <Card color={color} number={50} />
        <Card color={color} number={60} />
        <Card color={color} number={70} />
        <Card color={color} number={80} />
        <Card color={color} number={90} />
        <Card color={color} number={100} />
      </div>
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
