import { Alert, Flex, Box } from "@chakra-ui/react";
import React from "react";
import { LightenDarkenColor } from "lighten-darken-color";

function Card({ color, number }) {
  return (
    <div>
      <Flex alignItems="center" flexDirection="column">
        <Box backgroundColor="grey" borderRadius="20%">
          %{number}
        </Box>
        <br></br>
        <div
          style={{
            backgroundColor: LightenDarkenColor(color, number),
            color: "white",
            width: "65px",
            height: "65px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: "5px",
          }}
          onClick={() => {
            navigator.clipboard.writeText(LightenDarkenColor(color, number));
            <Alert status="success">
              Hex Code Successfully Copied To Clipboard
            </Alert>;
          }}
        >
          {LightenDarkenColor(color, number)}
        </div>
        <br></br>
        <div
          style={{
            backgroundColor: LightenDarkenColor(color, -number),
            color: "white",
            width: "65px",
            height: "65px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: "5px",
          }}
          onClick={() => {
            navigator.clipboard.writeText(LightenDarkenColor(color, -number));
            <Alert status="success">
              Hex Code Successfully Copied To Clipboard
            </Alert>;
          }}
        >
          {LightenDarkenColor(color, -number)}
        </div>
      </Flex>
    </div>
  );
}

export default Card;
