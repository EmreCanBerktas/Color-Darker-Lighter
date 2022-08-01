import { Heading, Box, Input, Flex, Container } from "@chakra-ui/react";
import Card from "./Card";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("#FFC0CB");
  return (
    <div>
      <Heading>Color Shader</Heading>
      <Container maxW="730px">
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
          <Flex alignItems="center" justifyContent="space-around">
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %0
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %10
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %20
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %30
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %40
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %50
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %60
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %70
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %80
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %90
            </Box>
            <Box bg="#a1a1a1" borderRadius="5px" fontSize="1.25rem">
              %100
            </Box>
          </Flex>
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
      </Container>
    </div>
  );
}

export default App;
