import { Alert, Flex, Box } from "@chakra-ui/react";
import React from "react";
import { LightenDarkenColor } from "lighten-darken-color";

function Card({ color, number }) {
  return (
    <div>
      <Flex alignItems="center" flexDirection="column">
        <Box>%{number}</Box>
        <br></br>
        <Box
          style={{
            backgroundColor: LightenDarkenColor(color, number),
            width: "65px",
            height: "65px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "20%",
          }}
          onClick={() => {
            navigator.clipboard.writeText(LightenDarkenColor(color, number));
            <Alert status="success">
              Hex Code Successfully Copied To Clipboard
            </Alert>;
          }}
        >
          {LightenDarkenColor(color, number)}
        </Box>
        <br></br>
        <Box
          style={{
            backgroundColor: LightenDarkenColor(color, -number),
            display: "flex",
            width: "65px",
            height: "65px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "20%",
          }}
          onClick={() => {
            navigator.clipboard.writeText(LightenDarkenColor(color, -number));
            <Alert status="success">
              Hex Code Successfully Copied To Clipboard
            </Alert>;
          }}
        >
          {LightenDarkenColor(color, -number)}
        </Box>
      </Flex>
    </div>
  );
}

export default Card;
