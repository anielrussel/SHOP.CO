import React from "react";
import Navbar from "../components/page/Navbar";

export default function({children}) {
  return (
    <Navbar>
      {children}
    </Navbar>
  )
}
