import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React from "react";
import { LightenDarkenColor } from "lighten-darken-color";

function Card({ color, number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: LightenDarkenColor(color, number),
          color: "white",
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: "5px",
          margin: "5px",
          borderRadius: "50%",
        }}
        onClick={() => {
          navigator.clipboard.writeText(LightenDarkenColor(color, number));
          console.log("yolo");
          <Alert status="success">
            Hex Code Successfully Copied To Clipboard
          </Alert>;
        }}
      >
        {LightenDarkenColor(color, number)}
      </div>
      <br></br>
    </div>
  );
}

export default Card;
