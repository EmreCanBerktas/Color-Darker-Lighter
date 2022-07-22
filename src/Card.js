import { Alert } from "@chakra-ui/react";
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
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: "5px",
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
    </div>
  );
}

export default Card;
