import { Heading, Input, Flex, Container } from "@chakra-ui/react";
import Card from "./Card";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("#FF7000");
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
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card color={color} number={100} />
            <Card color={color} number={90} />
            <Card color={color} number={80} />
            <Card color={color} number={70} />
            <Card color={color} number={60} />
            <Card color={color} number={50} />
            <Card color={color} number={40} />
            <Card color={color} number={30} />
            <Card color={color} number={20} />
            <Card color={color} number={10} />
            <Card color={color} number={0} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
