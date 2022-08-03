import { useState } from "react";
import {
  Heading,
  Input,
  Flex,
  Container,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Card from "./Card";
import Footer from "./Footer";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [color, setColor] = useState("#FF7000");
  return (
    <div>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>

      <br></br>
      <br></br>
      <Flex minWidth="max-content" alignItems="center" justifyContent="center">
        <Heading>Color Shader</Heading>
      </Flex>
      <Container maxW="730px">
        <div>
          <br></br>
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
        <Flex
          minWidth="max-content"
          alignItems="center"
          justifyContent="center"
        >
          <Footer />
        </Flex>
      </Container>
    </div>
  );
}

export default App;
