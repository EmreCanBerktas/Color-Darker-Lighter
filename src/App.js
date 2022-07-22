import { Heading, Box, Input, Flex } from "@chakra-ui/react";
import Card from "./Card";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("#FFC0CB");
  return (
    <div>
      <Heading>Color Shader</Heading>
      <div>
        <Flex justifyContent="center" alignItems="center">
          <Input
            width="400px"
            value={color}
            variant="filled"
            placeholder="Basic usage"
            size="lg"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </Flex>
        <br></br>
        <br></br>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="32.5%"
          >
            %0
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.5%"
          >
            %10
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.35%"
          >
            %20
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.4%"
          >
            %30
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.4%"
          >
            %40
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.4%"
          >
            %50
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.5%"
          >
            %60
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.4%"
          >
            %70
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.4%"
          >
            %80
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.5%"
          >
            %90
          </Box>
          <Box
            bg="#a1a1a1"
            borderRadius="5px"
            fontSize="1.25rem"
            marginLeft="1.3%"
          >
            %100
          </Box>
        </div>
        <br></br>
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
          {/* <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
