import React from "react";
import { Link } from "@chakra-ui/react";

function Footer() {
  return (
    <div>
      Created By{" "}
      <Link
        href="https://github.com/emrecanberktas"
        color="teal.200"
        isExternal
        fontWeight="bold"
      >
        Emre Can Berktaş
      </Link>
    </div>
  );
}

export default Footer;
